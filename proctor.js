/**
 * ProctorEngine - Security & Integrity System for Online Examinations
 * Controls anti-copying, fullscreen enforcement, tab/window focus tracking, and DevTools blocking.
 */

class ProctorEngine {
  constructor() {
    this.isActive = false;
    this.maxViolations = 3;
    this.violationCount = 0;
    this.violationsLog = [];
    this.onViolationCallback = null;
    this.onMaxViolationsReached = null;
    
    // Bind event handlers
    this.handleFullscreenChange = this.handleFullscreenChange.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleWindowBlur = this.handleWindowBlur.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
    this.handleCopyCutPaste = this.handleCopyCutPaste.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);

    this.lastBlurTime = 0;
  }

  /**
   * Start proctoring engine for an active test session
   * @param {Object} options { maxViolations, onViolation, onMaxViolationsReached }
   */
  async start(options = {}) {
    this.maxViolations = options.maxViolations || 3;
    this.onViolationCallback = options.onViolation || null;
    this.onMaxViolationsReached = options.onMaxViolationsReached || null;
    this.violationCount = 0;
    this.violationsLog = [];
    this.isActive = true;

    // Attach security event listeners
    document.addEventListener("fullscreenchange", this.handleFullscreenChange);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    window.addEventListener("blur", this.handleWindowBlur);
    document.addEventListener("contextmenu", this.handleContextMenu);
    document.addEventListener("keydown", this.handleKeydown, true);
    document.addEventListener("copy", this.handleCopyCutPaste);
    document.addEventListener("cut", this.handleCopyCutPaste);
    document.addEventListener("paste", this.handleCopyCutPaste);
    document.addEventListener("dragstart", this.handleDragStart);

    // Apply strict selection prevention
    document.body.classList.add("proctor-strict-mode");

    // Enforce fullscreen
    await this.requestFullscreen();
  }

  /**
   * Stop proctoring engine when test completes or submits
   */
  stop() {
    this.isActive = false;

    // Remove security event listeners
    document.removeEventListener("fullscreenchange", this.handleFullscreenChange);
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    window.removeEventListener("blur", this.handleWindowBlur);
    document.removeEventListener("contextmenu", this.handleContextMenu);
    document.removeEventListener("keydown", this.handleKeydown, true);
    document.removeEventListener("copy", this.handleCopyCutPaste);
    document.removeEventListener("cut", this.handleCopyCutPaste);
    document.removeEventListener("paste", this.handleCopyCutPaste);
    document.removeEventListener("dragstart", this.handleDragStart);

    document.body.classList.remove("proctor-strict-mode");
    this.exitFullscreen();
  }

  /**
   * Request full screen mode from browser
   */
  async requestFullscreen() {
    try {
      const docEl = document.documentElement;
      if (!document.fullscreenElement) {
        if (docEl.requestFullscreen) {
          await docEl.requestFullscreen();
        } else if (docEl.webkitRequestFullscreen) {
          await docEl.webkitRequestFullscreen();
        } else if (docEl.msRequestFullscreen) {
          await docEl.msRequestFullscreen();
        }
      }
    } catch (err) {
      console.warn("Fullscreen request error or user denied request:", err);
      this.recordViolation("FULLSCREEN_DENIED", "Fullscreen access request failed or was dismissed.");
    }
  }

  /**
   * Exit fullscreen mode smoothly
   */
  exitFullscreen() {
    try {
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    } catch (e) {}
  }

  /**
   * Handle full screen state changes
   */
  handleFullscreenChange() {
    if (!this.isActive) return;

    if (!document.fullscreenElement) {
      // User exited fullscreen during test
      this.recordViolation(
        "FULLSCREEN_EXIT",
        "Candidate exited full-screen mode during the exam."
      );
      this.showFullscreenLockOverlay();
    } else {
      this.hideFullscreenLockOverlay();
    }
  }

  /**
   * Handle Tab / Window switching via Visibility API
   */
  handleVisibilityChange() {
    if (!this.isActive) return;

    if (document.hidden) {
      this.recordViolation(
        "TAB_SWITCH",
        "Candidate switched to a different browser tab or minimized the window."
      );
    }
  }

  /**
   * Handle Window Blur (Losing app window focus)
   */
  handleWindowBlur() {
    if (!this.isActive) return;

    const now = Date.now();
    // Debounce blur events within 1.5 seconds to avoid duplicate counting with visibilitychange
    if (now - this.lastBlurTime < 1500) return;
    this.lastBlurTime = now;

    // Check if hidden was already captured
    if (!document.hidden) {
      this.recordViolation(
        "WINDOW_BLUR",
        "Candidate switched focus away from the test window."
      );
    }
  }

  /**
   * Prevent Right Click context menu
   */
  handleContextMenu(e) {
    if (!this.isActive) return;
    e.preventDefault();
    this.recordViolation(
      "RIGHT_CLICK",
      "Right-click context menu attempt blocked.",
      false // non-incrementing warning flag if desired, or set true
    );
    this.showToastWarning("Right-clicking is disabled during the exam.");
    return false;
  }

  /**
   * Prevent forbidden keyboard shortcuts (Copy, Cut, Paste, DevTools, PrintScreen, Print)
   */
  handleKeydown(e) {
    if (!this.isActive) return;

    const isCtrlCmd = e.ctrlKey || e.metaKey;
    const key = e.key ? e.key.toLowerCase() : "";

    // DevTools: F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Cmd+Option+I, Cmd+Option+J, Cmd+Option+C
    const isDevTools = 
      e.key === "F12" || 
      (isCtrlCmd && e.shiftKey && (key === "i" || key === "j" || key === "c")) ||
      (e.altKey && e.metaKey && (key === "i" || key === "j" || key === "c"));

    // Copy / Cut / Paste: Ctrl+C, Ctrl+X, Ctrl+V
    const isClipboardShortcut = isCtrlCmd && (key === "c" || key === "x" || key === "v");

    // View Source: Ctrl+U
    const isViewSource = isCtrlCmd && key === "u";

    // Save Page: Ctrl+S
    const isSavePage = isCtrlCmd && key === "s";

    // Print: Ctrl+P
    const isPrint = isCtrlCmd && key === "p";

    // Print Screen Key
    const isPrintScreen = e.key === "PrintScreen";

    if (isDevTools || isClipboardShortcut || isViewSource || isSavePage || isPrint || isPrintScreen) {
      e.preventDefault();
      e.stopPropagation();

      let reason = "Forbidden keyboard shortcut attempted.";
      if (isDevTools) reason = "Attempted to open Developer Tools.";
      if (isClipboardShortcut) reason = "Attempted Copy/Cut/Paste shortcut.";
      if (isPrintScreen) reason = "Attempted Print Screen screenshot.";
      if (isViewSource) reason = "Attempted View Source shortcut.";

      this.showToastWarning(`Security Alert: ${reason}`);
      this.recordViolation("KEYBOARD_SHORTCUT", reason, false);
      return false;
    }
  }

  /**
   * Prevent text clipboard actions
   */
  handleCopyCutPaste(e) {
    if (!this.isActive) return;
    e.preventDefault();
    this.showToastWarning("Copy, Cut, and Paste functions are strictly disabled.");
    this.recordViolation("CLIPBOARD_ACTION", "Clipboard operation intercepted.", false);
    return false;
  }

  /**
   * Prevent Dragging elements
   */
  handleDragStart(e) {
    if (!this.isActive) return;
    e.preventDefault();
    return false;
  }

  /**
   * Record a proctoring violation and handle maximum thresholds
   */
  recordViolation(type, description, countAsMajor = true) {
    const entry = {
      timestamp: new Date().toLocaleTimeString(),
      type,
      description,
      isMajor: countAsMajor
    };
    this.violationsLog.push(entry);

    if (countAsMajor) {
      this.violationCount++;
      
      if (this.onViolationCallback) {
        this.onViolationCallback({
          count: this.violationCount,
          max: this.maxViolations,
          type,
          description,
          log: this.violationsLog
        });
      }

      if (this.violationCount >= this.maxViolations) {
        // Maximum allowed violations reached -> Auto submit exam
        if (this.onMaxViolationsReached) {
          this.onMaxViolationsReached({
            violationsCount: this.violationCount,
            log: this.violationsLog
          });
        }
      }
    }
  }

  /**
   * Displays full screen lock overlay requiring user interaction to resume
   */
  showFullscreenLockOverlay() {
    let overlay = document.getElementById("proctor-fullscreen-overlay");
    if (overlay) {
      overlay.classList.remove("hidden");
    }
  }

  /**
   * Hides full screen lock overlay
   */
  hideFullscreenLockOverlay() {
    let overlay = document.getElementById("proctor-fullscreen-overlay");
    if (overlay) {
      overlay.classList.add("hidden");
    }
  }

  /**
   * Displays subtle non-blocking security toast notification
   */
  showToastWarning(message) {
    const container = document.getElementById("proctor-toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "proctor-toast";
    toast.innerHTML = `
      <div class="toast-icon">⚠️</div>
      <div class="toast-content">
        <strong>Security Warning</strong>
        <span>${message}</span>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("fade-out");
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
}

window.proctorEngine = new ProctorEngine();
