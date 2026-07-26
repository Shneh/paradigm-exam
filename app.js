/**
 * App - Main Controller for MCQ Exam Platform
 */

class App {
  constructor() {
    this.currentQuiz = null;
    this.candidateName = "";
    this.candidateId = "";
    this.currentQuestionIndex = 0;
    this.userAnswers = {}; // { questionId: selectedOptionIndex }
    this.flaggedQuestions = new Set(); // Set of questionIds
    this.timerInterval = null;
    this.remainingSeconds = 0;
    this.examStartTime = null;
    this.examEndTime = null;
    this.isExamActive = false;

    this.initViews();
    this.initTheme();
    this.bindEvents();
    
    // Auto-restore cached user session (Student or Admin)
    setTimeout(() => this.restoreCachedSession(), 50);
  }

  restoreCachedSession() {
    try {
      const activeRole = localStorage.getItem("cached_user_role");
      if (activeRole === "student") {
        const savedStudent = localStorage.getItem("cached_student_session");
        if (savedStudent) {
          const student = JSON.parse(savedStudent);
          if (student && student.id) {
            this.loggedInStudent = student;
            this.candidateName = student.name || student.id;
            this.candidateId = student.id;

            const nameElem = document.getElementById("menu-student-name");
            const idElem = document.getElementById("menu-student-id");
            if (nameElem) nameElem.textContent = `Welcome, ${student.name || student.id}`;
            if (idElem) idElem.textContent = `Roll ID: ${student.id} (${student.class || 'Student'})`;

            this.showView("studentMenu");
            console.log("⚡ Auto-logged in student from cached session:", student.id);
            return;
          }
        }
      } else if (activeRole === "admin") {
        const savedAdmin = localStorage.getItem("cached_admin_session");
        if (savedAdmin && window.adminManager) {
          window.adminManager.isLoggedIn = true;
          this.showView("admin");
          window.adminManager.switchAdminTab("admin-tab-papers");
          window.adminManager.renderAllAdminTabs();
          console.log("⚡ Auto-logged in admin from cached session");
          return;
        }
      }
    } catch (e) {
      console.warn("Could not restore cached session:", e.message);
    }
  }

  initTheme() {
    const btnToggle = document.getElementById("btn-theme-toggle");
    const savedTheme = localStorage.getItem("theme_preference") || "dark";
    this.setTheme(savedTheme);

    if (btnToggle) {
      btnToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        this.setTheme(nextTheme);
      });
    }
  }

  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme_preference", theme);
    
    const btnToggle = document.getElementById("btn-theme-toggle");
    if (btnToggle) {
      if (theme === "light") {
        btnToggle.innerHTML = "🌙 Dark Mode";
      } else {
        btnToggle.innerHTML = "☀️ Light Mode";
      }
    }
  }

  initViews() {
    this.views = {
      login: document.getElementById("view-login"),
      studentMenu: document.getElementById("view-student-menu"),
      availableTests: document.getElementById("view-available-tests"),
      publishedResults: document.getElementById("view-published-results"),
      instructions: document.getElementById("view-instructions"),
      exam: document.getElementById("view-exam"),
      results: document.getElementById("view-results"),
      admin: document.getElementById("view-admin")
    };
  }

  showView(viewName) {
    Object.keys(this.views).forEach(key => {
      if (this.views[key]) {
        this.views[key].classList.add("hidden");
      }
    });
    if (this.views[viewName]) {
      this.views[viewName].classList.remove("hidden");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  bindEvents() {
    // Student Login Form Submit
    const formLogin = document.getElementById("form-candidate-login");
    if (formLogin) {
      formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleStudentLogin();
      });
    }

    // Student Logout
    const btnLogout = document.getElementById("btn-student-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        this.loggedInStudent = null;
        this.candidateName = "";
        this.candidateId = "";
        localStorage.removeItem("cached_student_session");
        if (localStorage.getItem("cached_user_role") === "student") {
          localStorage.removeItem("cached_user_role");
        }
        this.showView("login");
      });
    }

    // Dashboard Action 1: Attempt Test
    const btnAttempt = document.getElementById("btn-menu-attempt-test");
    if (btnAttempt) {
      btnAttempt.addEventListener("click", () => {
        this.renderAvailableTests();
        this.showView("availableTests");
      });
    }

    // Dashboard Action 2: Check Results
    const btnCheckResults = document.getElementById("btn-menu-check-results");
    if (btnCheckResults) {
      btnCheckResults.addEventListener("click", () => {
        this.renderStudentPublishedResults();
        this.showView("publishedResults");
      });
    }

    // Back to Dashboard buttons
    document.querySelectorAll(".btn-back-dashboard").forEach(btn => {
      btn.addEventListener("click", () => {
        if (this.loggedInStudent) {
          this.showView("studentMenu");
        } else {
          this.showView("login");
        }
      });
    });

    // Begin Exam Button on Instructions modal
    const btnBeginExam = document.getElementById("btn-begin-exam");
    if (btnBeginExam) {
      btnBeginExam.addEventListener("click", () => this.startExamSession());
    }

    // See Result Button on Instructions modal
    const btnViewResult = document.getElementById("btn-view-instruction-result");
    if (btnViewResult) {
      btnViewResult.addEventListener("click", () => this.handleViewStudentResult());
    }

    // Re-enter Fullscreen Button on overlay
    const btnReenterFullscreen = document.getElementById("btn-reenter-fullscreen");
    if (btnReenterFullscreen) {
      btnReenterFullscreen.addEventListener("click", async () => {
        await window.proctorEngine.requestFullscreen();
      });
    }

    // Navigation buttons in Exam view
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const btnFlag = document.getElementById("btn-flag");
    const btnClear = document.getElementById("btn-clear");
    const btnSubmitExam = document.getElementById("btn-submit-exam");

    if (btnPrev) btnPrev.addEventListener("click", () => this.navigateQuestion(-1));
    if (btnNext) btnNext.addEventListener("click", () => this.navigateQuestion(1));
    if (btnFlag) btnFlag.addEventListener("click", () => this.toggleFlagQuestion());
    if (btnClear) btnClear.addEventListener("click", () => this.clearCurrentResponse());
    if (btnSubmitExam) btnSubmitExam.addEventListener("click", () => this.confirmSubmitExam());

    // Retake / Home button on Results screen
    const btnBackHome = document.getElementById("btn-back-home");
    if (btnBackHome) btnBackHome.addEventListener("click", () => {
      this.resetExamState();
      if (this.loggedInStudent) {
        this.showView("studentMenu");
      } else {
        this.showView("login");
      }
    });
  }

  async handleStudentLogin() {
    const idInput = document.getElementById("candidate-id");
    const passInput = document.getElementById("candidate-password");

    const candidateId = idInput ? idInput.value.trim() : "";
    const candidatePass = passInput ? passInput.value.trim() : "";

    if (!candidateId || !candidatePass) {
      alert("Please enter both your Student Roll ID and Password.");
      return;
    }

    let student = null;
    try {
      const res = await window.api.loginStudent(candidateId, candidatePass);
      if (res && res.student) student = res.student;
    } catch (err) {
      // Fallback to local QuizManager
      student = window.quizManager.authenticateStudent(candidateId, candidatePass);
    }

    if (!student) {
      alert(`❌ INVALID STUDENT CREDENTIALS!\n\nNo registered student found for ID '${candidateId}' with the provided password.\n\n(Demo Testing: Try ID 'STU-101' with password 'stu101@password')`);
      return;
    }

    this.loggedInStudent = student;
    this.candidateName = student.name;
    this.candidateId = student.id;

    // Cache student session for auto-login
    try {
      localStorage.setItem("cached_student_session", JSON.stringify(student));
      localStorage.setItem("cached_user_role", "student");
    } catch (e) {}

    // Update Dashboard Welcome Title
    document.getElementById("menu-student-name").textContent = `Welcome, ${student.name}`;
    document.getElementById("menu-student-id").textContent = `Roll ID: ${student.id} (${student.class || 'Student'})`;

    this.showView("studentMenu");
  }

  async renderAvailableTests() {
    const container = document.getElementById("available-quizzes-grid");
    if (!container) return;

    let quizzes = [];
    try {
      quizzes = await window.api.getQuizzes();
    } catch (e) {
      quizzes = window.quizManager.getAllQuizzes();
    }

    const visibleQuizzes = quizzes.filter(q => !q.isHidden);

    container.innerHTML = "";

    if (visibleQuizzes.length === 0) {
      container.innerHTML = `
        <div class="proctor-feature-notice" style="grid-column: 1 / -1; margin:0;">
          <h4>⭕ No Test Papers Available</h4>
          <p style="font-size:0.88rem; color:var(--text-muted);">
            There are currently no test papers published on your student dashboard. Please contact your instructor.
          </p>
        </div>
      `;
      return;
    }

    for (const quiz of visibleQuizzes) {
      const card = document.createElement("div");
      const isActive = !!quiz.isActive;
      
      let hasAttempted = false;
      try {
        const attRes = await window.api.checkAttempt(this.candidateId, quiz.id);
        hasAttempted = attRes ? !!attRes.hasAttempted : false;
      } catch (e) {
        hasAttempted = window.quizManager.hasStudentAttempted(this.candidateId, quiz.id);
      }

      card.className = `quiz-card ${!isActive ? "quiz-card-inactive" : ""}`;
      card.dataset.id = quiz.id;

      card.innerHTML = `
        <div class="quiz-card-badges">
          <span class="quiz-card-badge">⏱️ ${quiz.timeLimitMinutes} Mins</span>
          <div style="display:flex; gap:0.4rem; flex-wrap:wrap;">
            <span class="quiz-status-pill ${isActive ? "pill-active" : "pill-inactive"}">
              ${isActive ? "🟢 LIVE" : "🔒 INACTIVE"}
            </span>
            ${hasAttempted ? '<span class="quiz-status-pill pill-inactive">⛔ ATTEMPTED</span>' : ''}
          </div>
        </div>
        <h3>${this.escapeHtml(quiz.title)}</h3>
        <p>${this.escapeHtml(quiz.description)}</p>
        <div class="quiz-card-footer">
          <span>📝 ${(quiz.questions || []).length} Questions</span>
          <span>🎯 Pass Marks: ${quiz.passingMarks || Math.round((quiz.totalMarks || 100)*0.4)}</span>
        </div>
      `;

      card.addEventListener("click", () => {
        if (hasAttempted) {
          alert(`⛔ TEST ALREADY ATTEMPTED!\n\nYou have already submitted an attempt for '${quiz.title}'. Only 1 attempt is allowed per candidate.\n\nPlease click 'Check Results' from your main dashboard to view your published scorecard.`);
          return;
        }

        if (!isActive) {
          alert(`⚠️ TEST INACTIVE!\n\n'${quiz.title}' is currently INACTIVE by the Administrator.\n\nPlease wait until your teacher activates this test paper.`);
          return;
        }

        this.currentQuiz = quiz;

        // Populate Instructions Screen
        document.getElementById("inst-candidate-name").textContent = `${this.candidateName} (${this.candidateId})`;
        document.getElementById("inst-quiz-title").textContent = quiz.title;
        document.getElementById("inst-total-q").textContent = `${quiz.questions.length} Questions`;
        document.getElementById("inst-time-limit").textContent = `${quiz.timeLimitMinutes} Minutes`;
        document.getElementById("inst-max-warnings").textContent = `${quiz.maxViolationsAllowed} Allowed`;

        const marksPerCorrect = quiz.marksPerCorrect !== undefined ? quiz.marksPerCorrect : 1;
        const negativeMarks = quiz.negativeMarksPerWrong !== undefined ? quiz.negativeMarksPerWrong : 0;
        const totalMarks = quiz.totalMarks || (quiz.questions.length * marksPerCorrect);
        const passMarks = quiz.passingMarks !== undefined ? quiz.passingMarks : Math.round(totalMarks * 0.4);

        const totalMarksElem = document.getElementById("inst-total-marks");
        if (totalMarksElem) {
          totalMarksElem.textContent = `${totalMarks} Marks (Pass: ${passMarks} | +${marksPerCorrect} / -${negativeMarks.toFixed(2)})`;
        }

        // Configure Start Button state
        const btnBeginExam = document.getElementById("btn-begin-exam");
        if (btnBeginExam) {
          btnBeginExam.disabled = false;
          btnBeginExam.innerHTML = "🔒 I Agree & Start Test in Full Screen";
          btnBeginExam.classList.add("btn-glow");
        }

        this.showView("instructions");
      });

      container.appendChild(card);
    }
  }

  async renderStudentPublishedResults() {
    const container = document.getElementById("student-published-results-container");
    if (!container) return;

    let candidateSubs = [];
    let quizzes = [];

    try {
      candidateSubs = await window.api.getSubmissions(this.candidateId);
      quizzes = await window.api.getQuizzes();
    } catch (e) {
      quizzes = window.quizManager.getAllQuizzes();
      const allSubs = window.quizManager.getSubmissions();
      candidateSubs = allSubs.filter(sub => 
        sub.candidateId.toUpperCase() === this.candidateId.toUpperCase()
      );
    }

    if (candidateSubs.length === 0) {
      container.innerHTML = `
        <div class="proctor-feature-notice" style="margin:0;">
          <h4>⭕ No Submissions Found</h4>
          <p style="font-size:0.88rem; color:var(--text-muted);">
            You have not completed any examination attempts yet. Click 'Attempt Test' from your dashboard to start an active test.
          </p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Date / Time</th>
              <th>Test Paper</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Result Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${candidateSubs.map(sub => {
              const quiz = quizzes.find(q => q.id === sub.quizId) || window.quizManager.getQuizById(sub.quizId);
              const isPublished = quiz ? !!quiz.isResultPublished : false;
              const passMarks = quiz ? (quiz.passingMarks || Math.round((sub.totalMarks || 100)*0.4)) : 40;
              const isPassed = sub.score >= passMarks;

              return `
                <tr>
                  <td><span class="sub-info">${sub.timestamp}</span></td>
                  <td><strong>${this.escapeHtml(sub.quizTitle)}</strong></td>
                  <td>${isPublished ? `<strong>${sub.score} / ${sub.totalMarks}</strong>` : '<span class="text-yellow">🔒 Hidden</span>'}</td>
                  <td>${isPublished ? `<span class="${isPassed ? 'text-green' : 'text-red'}">${sub.scorePercentage}%</span>` : '<span class="text-yellow">Pending</span>'}</td>
                  <td>
                    ${!isPublished 
                      ? '<span class="status-fail" style="color:var(--warning);">🔒 Results Pending Teacher Release</span>'
                      : sub.isDisqualified 
                        ? '<span class="status-fail">⛔ Disqualified</span>'
                        : isPassed 
                          ? '<span class="status-pass">🎉 PASSED</span>' 
                          : '<span class="status-fail">📊 NEEDS IMPROVEMENT</span>'}
                  </td>
                  <td>
                    <button type="button" class="btn btn-secondary btn-sm btn-open-scorecard" data-quizid="${sub.quizId}">
                      ${isPublished ? '👁️ Open Scorecard & Review' : 'ℹ️ View Status'}
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    container.querySelectorAll(".btn-open-scorecard").forEach(btn => {
      btn.addEventListener("click", async () => {
        const quizId = btn.dataset.quizid;
        // Also grab the stored submission so we can show the breakdown
        const sub = candidateSubs.find(s => s.quizId === quizId);

        try {
          this.currentQuiz = await window.api.getQuizById(quizId);
        } catch (e) {
          this.currentQuiz = window.quizManager.getQuizById(quizId);
        }
        
        if (!this.currentQuiz.isResultPublished) {
          alert(`🔒 RESULTS NOT PUBLISHED YET:\n\nYour attempt for '${this.currentQuiz.title}' has been recorded, but your teacher has not published the marks yet.\n\nPlease check back once your teacher clicks 'Publish Results' in the Admin panel.`);
          return;
        }

        // Restore stored answers & questions snapshot so the breakdown renders exact saved test paper
        if (sub && sub.questionsSnapshot && sub.questionsSnapshot.length > 0) {
          this.currentQuiz = {
            ...(this.currentQuiz || {}),
            id: quizId,
            title: sub.quizTitle || (this.currentQuiz ? this.currentQuiz.title : "Test Paper"),
            questions: sub.questionsSnapshot,
            marksPerCorrect: (sub.summaryResult && sub.summaryResult.marksPerCorrect) !== undefined ? sub.summaryResult.marksPerCorrect : (this.currentQuiz ? this.currentQuiz.marksPerCorrect : 1),
            negativeMarksPerWrong: (sub.summaryResult && sub.summaryResult.negativeMarksPerWrong) !== undefined ? sub.summaryResult.negativeMarksPerWrong : (this.currentQuiz ? this.currentQuiz.negativeMarksPerWrong : 0),
            totalMarks: sub.totalMarks || (this.currentQuiz ? this.currentQuiz.totalMarks : 100),
            isResultPublished: this.currentQuiz ? !!this.currentQuiz.isResultPublished : true
          };
        }

        this.userAnswers = (sub && sub.userAnswers) ? sub.userAnswers : {};
        this.examStartTime = sub ? new Date(sub.startTime || sub.timestamp) : new Date();
        this.examEndTime = sub ? new Date(sub.endTime || sub.timestamp) : new Date();

        this.renderResultsScreen(sub ? !!sub.isDisqualified : false);
        this.showView("results");
      });
    });
  }

  handleViewStudentResult() {
    if (!this.currentQuiz || !this.candidateId) {
      alert("Please select a test paper and log in first.");
      return;
    }

    const hasAttempted = window.quizManager.hasStudentAttempted(this.candidateId, this.currentQuiz.id);
    if (!hasAttempted) {
      alert(`⭕ NO ATTEMPT FOUND:\n\nCandidate '${this.candidateName} (${this.candidateId})' has not submitted an attempt for '${this.currentQuiz.title}' yet.`);
      return;
    }

    if (!this.currentQuiz.isResultPublished) {
      alert(`🔒 RESULTS NOT PUBLISHED YET:\n\nYour attempt for '${this.currentQuiz.title}' has been recorded, but your teacher has not published the marks yet.\n\nPlease check back once the teacher clicks 'Publish Results' in the Admin panel.`);
      return;
    }

    // Results are published & attempt exists -> Render & display full scorecard!
    this.renderResultsScreen(false);
    this.showView("results");
  }

  async startExamSession() {
    // Always check the API database for attempt lock (not just localStorage)
    try {
      const attRes = await window.api.checkAttempt(this.candidateId, this.currentQuiz.id);
      if (attRes && attRes.hasAttempted) {
        alert(`⛔ ATTEMPT LIMIT EXCEEDED!\n\nYou have already submitted an attempt for '${this.currentQuiz.title}'. Only 1 attempt is allowed per candidate.\n\nPlease click 'Check Results' from your dashboard to view your scorecard.`);
        return;
      }
    } catch (e) {
      // Fallback: check local store
      if (window.quizManager.hasStudentAttempted(this.candidateId, this.currentQuiz.id)) {
        alert(`⛔ ATTEMPT LIMIT EXCEEDED!\n\nYou have already submitted an attempt for '${this.currentQuiz.title}'. Only 1 attempt is allowed per candidate.`);
        return;
      }
    }

    this.userAnswers = {};
    this.flaggedQuestions = new Set();
    this.currentQuestionIndex = 0;
    this.isExamActive = true;
    this.examStartTime = new Date();

    // Ensure every question has a unique ID for proper answer and flag tracking
    if (this.currentQuiz && this.currentQuiz.questions) {
      this.currentQuiz.questions.forEach((q, idx) => {
        if (!q.id) {
          q.id = `${this.currentQuiz.id || 'quiz'}_q_${idx + 1}`;
        }
      });
    }

    // Set timer
    this.remainingSeconds = this.currentQuiz.timeLimitMinutes * 60;
    this.startTimer();

    // Render exam UI
    document.getElementById("exam-title").textContent = this.currentQuiz.title;
    document.getElementById("header-candidate-info").textContent = `${this.candidateName} (${this.candidateId})`;
    this.updateViolationBadge(0, this.currentQuiz.maxViolationsAllowed);
    
    this.renderQuestionNavigator();
    this.renderCurrentQuestion();
    this.showView("exam");

    // Initialize Proctor Engine with callbacks
    await window.proctorEngine.start({
      maxViolations: this.currentQuiz.maxViolationsAllowed,
      onViolation: (data) => {
        this.updateViolationBadge(data.count, data.max);
        this.updateViolationListInExam(data.log);
      },
      onMaxViolationsReached: (data) => {
        alert("SECURITY DISQUALIFICATION: You have exceeded the maximum allowed security warnings (window switches / tab exits). Your test is being automatically submitted.");
        this.submitExam(true);
      }
    });
  }

  startTimer() {
    this.updateTimerDisplay();
    clearInterval(this.timerInterval);

    this.timerInterval = setInterval(() => {
      this.remainingSeconds--;
      this.updateTimerDisplay();

      if (this.remainingSeconds <= 0) {
        clearInterval(this.timerInterval);
        alert("TIME EXPIRED! Your answers are being submitted automatically.");
        this.submitExam(false);
      }
    }, 1000);
  }

  updateTimerDisplay() {
    const timerElem = document.getElementById("timer-display");
    if (!timerElem) return;

    const mins = Math.floor(this.remainingSeconds / 60);
    const secs = this.remainingSeconds % 60;
    const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    
    timerElem.textContent = formatted;

    if (this.remainingSeconds <= 120) {
      timerElem.classList.add("timer-warning");
    } else {
      timerElem.classList.remove("timer-warning");
    }
  }

  updateViolationBadge(count, max) {
    const badge = document.getElementById("proctor-violation-badge");
    if (badge) {
      badge.textContent = `⚠️ Warnings: ${count}/${max}`;
      if (count > 0) {
        badge.classList.add("has-violations");
      } else {
        badge.classList.remove("has-violations");
      }
    }
  }

  updateViolationListInExam(log) {
    // Updates live proctor log preview if needed
  }

  renderCurrentQuestion() {
    const question = this.currentQuiz.questions[this.currentQuestionIndex];
    if (!question) return;

    const qNum = this.currentQuestionIndex + 1;
    const totalQ = this.currentQuiz.questions.length;

    document.getElementById("q-number-badge").textContent = `Question ${qNum} of ${totalQ}`;
    document.getElementById("q-text").textContent = question.text;

    // Flag button state
    const btnFlag = document.getElementById("btn-flag");
    if (this.flaggedQuestions.has(question.id)) {
      btnFlag.classList.add("flagged");
      btnFlag.innerHTML = "🚩 Marked for Review";
    } else {
      btnFlag.classList.remove("flagged");
      btnFlag.innerHTML = "🏳️ Mark for Review";
    }

    // Render Options
    const optionsContainer = document.getElementById("q-options-container");
    optionsContainer.innerHTML = "";

    const selectedAnswer = this.userAnswers[question.id];

    question.options.forEach((optText, optIdx) => {
      const isSelected = selectedAnswer === optIdx;
      const optionLabel = document.createElement("div");
      optionLabel.className = `option-item ${isSelected ? "selected" : ""}`;
      
      const letter = String.fromCharCode(65 + optIdx); // A, B, C, D

      optionLabel.innerHTML = `
        <input type="radio" name="mcq-option-${question.id}" value="${optIdx}" ${isSelected ? "checked" : ""}>
        <span class="option-badge">${letter}</span>
        <span class="option-text">${this.escapeHtml(optText)}</span>
      `;

      optionLabel.addEventListener("click", (e) => {
        e.stopPropagation();
        this.selectOption(question.id, optIdx);
      });

      optionsContainer.appendChild(optionLabel);
    });

    // Disable / Enable Prev / Next Buttons
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");

    if (btnPrev) btnPrev.disabled = (this.currentQuestionIndex === 0);
    if (btnNext) {
      if (this.currentQuestionIndex === totalQ - 1) {
        btnNext.textContent = "Finish Form 📥";
      } else {
        btnNext.textContent = "Next Question ➡️";
      }
    }

    this.updateQuestionGridHighlight();
  }

  selectOption(questionId, optionIndex) {
    this.userAnswers[questionId] = optionIndex;
    this.renderCurrentQuestion();
    this.renderQuestionNavigator();
  }

  clearCurrentResponse() {
    const question = this.currentQuiz.questions[this.currentQuestionIndex];
    if (question && this.userAnswers.hasOwnProperty(question.id)) {
      delete this.userAnswers[question.id];
      this.renderCurrentQuestion();
      this.renderQuestionNavigator();
    }
  }

  toggleFlagQuestion() {
    const question = this.currentQuiz.questions[this.currentQuestionIndex];
    if (!question) return;
    const qId = question.id || `${this.currentQuiz.id || 'quiz'}_q_${this.currentQuestionIndex + 1}`;
    question.id = qId;

    if (this.flaggedQuestions.has(qId)) {
      this.flaggedQuestions.delete(qId);
    } else {
      this.flaggedQuestions.add(qId);
    }
    this.renderCurrentQuestion();
    this.renderQuestionNavigator();
  }

  navigateQuestion(delta) {
    const newIdx = this.currentQuestionIndex + delta;
    if (newIdx >= 0 && newIdx < this.currentQuiz.questions.length) {
      this.currentQuestionIndex = newIdx;
      this.renderCurrentQuestion();
    } else if (newIdx >= this.currentQuiz.questions.length) {
      this.confirmSubmitExam();
    }
  }

  jumpToQuestion(index) {
    if (index >= 0 && index < this.currentQuiz.questions.length) {
      this.currentQuestionIndex = index;
      this.renderCurrentQuestion();
    }
  }

  renderQuestionNavigator() {
    const grid = document.getElementById("question-nav-grid");
    if (!grid) return;

    grid.innerHTML = "";
    this.currentQuiz.questions.forEach((q, idx) => {
      const btn = document.createElement("button");
      btn.className = "nav-grid-item";

      const isAnswered = this.userAnswers.hasOwnProperty(q.id);
      const isFlagged = this.flaggedQuestions.has(q.id);
      const isCurrent = idx === this.currentQuestionIndex;

      if (isCurrent) btn.classList.add("current");
      if (isAnswered) btn.classList.add("answered");
      if (isFlagged) btn.classList.add("flagged");

      btn.textContent = idx + 1;
      btn.title = `Question ${idx + 1} (${isAnswered ? "Answered" : "Unanswered"}${isFlagged ? ", Marked for review" : ""})`;
      
      btn.addEventListener("click", () => this.jumpToQuestion(idx));
      grid.appendChild(btn);
    });

    // Update Summary Stats on Sidebar
    const answeredCount = Object.keys(this.userAnswers).length;
    const totalCount = this.currentQuiz.questions.length;
    const flaggedCount = this.flaggedQuestions.size;

    document.getElementById("stat-answered").textContent = answeredCount;
    document.getElementById("stat-unanswered").textContent = totalCount - answeredCount;
    document.getElementById("stat-flagged").textContent = flaggedCount;
  }

  updateQuestionGridHighlight() {
    const items = document.querySelectorAll(".nav-grid-item");
    items.forEach((item, idx) => {
      if (idx === this.currentQuestionIndex) {
        item.classList.add("current");
      } else {
        item.classList.remove("current");
      }
    });
  }

  confirmSubmitExam() {
    const totalQ = this.currentQuiz.questions.length;
    const answeredQ = Object.keys(this.userAnswers).length;
    const unansweredQ = totalQ - answeredQ;

    let msg = `Are you sure you want to submit your exam form?\n\n• Answered: ${answeredQ}\n• Unanswered: ${unansweredQ}`;
    if (unansweredQ > 0) {
      msg += `\n\n⚠️ Warning: You have ${unansweredQ} unanswered question(s)!`;
    }

    if (confirm(msg)) {
      this.submitExam(false);
    }
  }

  async submitExam(isDisqualified = false) {
    this.isExamActive = false;
    clearInterval(this.timerInterval);
    this.examEndTime = new Date();

    window.proctorEngine.stop();

    // Calculate Scores & Build Full Response Breakdown
    const totalQuestions = this.currentQuiz.questions.length;
    const marksPerCorrect = this.currentQuiz.marksPerCorrect !== undefined ? this.currentQuiz.marksPerCorrect : 1;
    const negativeMarks = this.currentQuiz.negativeMarksPerWrong !== undefined ? this.currentQuiz.negativeMarksPerWrong : 0;
    const maxTotalMarks = this.currentQuiz.totalMarks || (totalQuestions * marksPerCorrect);
    const passMarks = this.currentQuiz.passingMarks !== undefined ? this.currentQuiz.passingMarks : Math.round(maxTotalMarks * 0.4);

    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const questionsSnapshot = [];
    const detailedResults = [];

    this.currentQuiz.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isAttempted = userAns !== undefined;
      const isCorrect = isAttempted && userAns === q.correctAnswer;
      if (isCorrect) correctCount++;
      else if (isAttempted) incorrectCount++;
      else unattemptedCount++;

      const marksAwarded = isCorrect ? marksPerCorrect : isAttempted ? -negativeMarks : 0;

      questionsSnapshot.push({
        id: q.id,
        text: q.text,
        options: q.options || [],
        correctAnswer: q.correctAnswer,
        explanation: q.explanation || ""
      });

      detailedResults.push({
        questionId: q.id,
        questionNumber: idx + 1,
        questionText: q.text,
        options: q.options || [],
        userAnswerIndex: isAttempted ? userAns : null,
        userAnswerText: isAttempted ? (q.options ? q.options[userAns] : String(userAns)) : "Not Attempted",
        correctAnswerIndex: q.correctAnswer,
        correctAnswerText: q.options ? q.options[q.correctAnswer] : String(q.correctAnswer),
        isAttempted,
        isCorrect,
        status: isCorrect ? 'correct' : isAttempted ? 'incorrect' : 'unattempted',
        marksAwarded: parseFloat(marksAwarded.toFixed(2)),
        explanation: q.explanation || ""
      });
    });

    const rawScore = (correctCount * marksPerCorrect) - (incorrectCount * negativeMarks);
    const netScore = parseFloat(Math.max(0, rawScore).toFixed(2));
    const scorePercentage = (maxTotalMarks > 0) ? Math.round((netScore / maxTotalMarks) * 100) : 0;
    
    const startMs = (this.examStartTime && typeof this.examStartTime.getTime === 'function' && !isNaN(this.examStartTime.getTime())) ? this.examStartTime.getTime() : Date.now();
    const endMs = (this.examEndTime && typeof this.examEndTime.getTime === 'function' && !isNaN(this.examEndTime.getTime())) ? this.examEndTime.getTime() : Date.now();
    const durationMs = Math.max(0, endMs - startMs);
    const timeSpentMinutes = Math.max(1, Math.round(durationMs / 60000));
    
    const isPassed = netScore >= passMarks;

    const submissionPayload = {
      id: "SUB-" + Date.now(),
      quizId: this.currentQuiz.id,
      candidateName: this.candidateName,
      candidateId: this.candidateId,
      quizTitle: this.currentQuiz.title,
      score: netScore,
      totalMarks: maxTotalMarks,
      scorePercentage,
      userAnswers: this.userAnswers,
      startTime: this.examStartTime ? this.examStartTime.toISOString() : new Date().toISOString(),
      endTime: this.examEndTime ? this.examEndTime.toISOString() : new Date().toISOString(),
      timeSpentMinutes,
      summaryResult: {
        totalQuestions,
        correctCount,
        incorrectCount,
        unattemptedCount,
        rawScore,
        netScore,
        maxTotalMarks,
        scorePercentage,
        passMarks,
        isPassed,
        marksPerCorrect,
        negativeMarksPerWrong: negativeMarks
      },
      questionsSnapshot,
      detailedResults,
      violationsCount: (window.proctorEngine && window.proctorEngine.violationCount) ? window.proctorEngine.violationCount : 0,
      violationsLog: (window.proctorEngine && window.proctorEngine.violationsLog) ? window.proctorEngine.violationsLog : [],
      isDisqualified,
      timestamp: new Date().toLocaleString()
    };

    // 1. Immediately record attempt & submission in local storage for instant zero-latency UI transition
    window.quizManager.addSubmission(submissionPayload);
    window.quizManager.recordStudentAttempt(this.candidateId, this.currentQuiz.id);

    // 2. Render Results screen and transition UI immediately
    try {
      this.renderResultsScreen(isDisqualified);
    } catch (renderErr) {
      console.warn("Notice during renderResultsScreen:", renderErr.message);
    }
    this.showView("results");

    // 3. Sync to Firebase Cloud in background
    window.api.submitExam(submissionPayload).then(() => {
      console.log("🔥 Firebase Cloud: Submission & attempt lock synced!");
    }).catch(e => {
      console.warn("Firebase Cloud sync notice:", e.message);
    });
  }

  renderResultsScreen(isDisqualified) {
    const totalQuestions = this.currentQuiz.questions.length;
    const marksPerCorrect = this.currentQuiz.marksPerCorrect !== undefined ? this.currentQuiz.marksPerCorrect : 1;
    const negativeMarks = this.currentQuiz.negativeMarksPerWrong !== undefined ? this.currentQuiz.negativeMarksPerWrong : 0;
    const maxTotalMarks = this.currentQuiz.totalMarks || (totalQuestions * marksPerCorrect);

    let correctCount = 0;
    let incorrectCount = 0;
    let unattemptedCount = 0;

    const breakdownHtml = [];

    this.currentQuiz.questions.forEach((q, idx) => {
      const userAns = this.userAnswers[q.id];
      const isAttempted = userAns !== undefined;
      const isCorrect = isAttempted && userAns === q.correctAnswer;

      if (!isAttempted) {
        unattemptedCount++;
      } else if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      const userAnsText = isAttempted ? q.options[userAns] : "Not Attempted";
      const correctAnsText = q.options[q.correctAnswer];

      breakdownHtml.push(`
        <div class="result-question-card ${isCorrect ? 'correct' : isAttempted ? 'incorrect' : 'unattempted'}">
          <div class="result-card-header">
            <span class="result-q-num">Q${idx + 1}</span>
            <span class="result-status-badge ${isCorrect ? 'status-pass' : isAttempted ? 'status-fail' : 'status-none'}">
              ${isCorrect ? `✓ Correct (+${marksPerCorrect})` : isAttempted ? `✗ Incorrect (-${negativeMarks.toFixed(2)})` : '⭕ Unattempted (0)'}
            </span>
          </div>
          <p class="result-q-text">${this.escapeHtml(q.text)}</p>
          <div class="result-answers">
            <p><strong>Your Response:</strong> <span class="${isCorrect ? 'text-green' : 'text-red'}">${this.escapeHtml(userAnsText)}</span></p>
            ${!isCorrect ? `<p><strong>Correct Answer:</strong> <span class="text-green">${this.escapeHtml(correctAnsText)}</span></p>` : ''}
          </div>
          ${q.explanation ? `<div class="result-explanation"><strong>Explanation:</strong> ${this.escapeHtml(q.explanation)}</div>` : ''}
        </div>
      `);
    });

    const rawScore = (correctCount * marksPerCorrect) - (incorrectCount * negativeMarks);
    const netScore = parseFloat(Math.max(0, rawScore).toFixed(2));
    const scorePercentage = Math.round((netScore / maxTotalMarks) * 100);
    const timeSpentMinutes = Math.max(1, Math.round((this.examEndTime - this.examStartTime) / 60000));
    const isPublished = !!this.currentQuiz.isResultPublished;

    // NOTE: Submission is saved ONLY in submitExam() above — NOT here.
    // This function only renders the visual results screen.

    // Fill Candidate Header Info
    document.getElementById("res-candidate-name").textContent = this.candidateName;
    document.getElementById("res-quiz-title").textContent = this.currentQuiz.title;

    const passMarks = this.currentQuiz.passingMarks !== undefined ? this.currentQuiz.passingMarks : Math.round(maxTotalMarks * 0.4);
    const isPassed = netScore >= passMarks;

    const statusBanner = document.getElementById("res-status-banner");
    
    if (isDisqualified) {
      statusBanner.className = "results-banner banner-disqualified";
      statusBanner.innerHTML = `<h2>⛔ TEST DISQUALIFIED</h2><p>Auto-submitted due to multiple proctoring violations.</p>`;
    } else if (!isPublished) {
      statusBanner.className = "results-banner banner-failed";
      statusBanner.innerHTML = `
        <h2>🎉 THANK YOU FOR TAKING THE TEST!</h2>
        <p style="font-size:1.05rem; font-weight:600; margin-top:0.4rem; color:var(--text-main);">
          Your responses have been recorded. <strong>Your result will be published soon.</strong>
        </p>
        <div class="motivational-quote-box" style="margin-top:1.2rem; padding:1.2rem; background:rgba(99,102,241,0.15); border-left:4px solid var(--primary); border-radius:8px; text-align:center;">
          <p style="font-size:1.1rem; font-weight:700; color:var(--text-main); letter-spacing:0.5px; margin:0;">
            "RESULT IS ACCUMULATION OF SMALL STEPS YOU MADE. BELIEVE IN YOUR HARDWORK"
          </p>
        </div>
      `;
    } else if (isPassed) {
      statusBanner.className = "results-banner banner-passed";
      statusBanner.innerHTML = `
        <h2>🎉 CONGRATULATIONS! YOU HAVE PASSED THE EXAMINATION!</h2>
        <p style="font-weight:600; margin-top:0.3rem;">
          Great job! You achieved a net score of <strong>${netScore} / ${maxTotalMarks} Marks (${scorePercentage}%)</strong>.
          (Passing Mark required: ${passMarks} Marks).
        </p>
        <p style="font-size:0.85rem; opacity:0.9; margin-top:0.2rem;">
          ${correctCount} Correct, ${incorrectCount} Incorrect, ${unattemptedCount} Unattempted.
        </p>
      `;
    } else {
      statusBanner.className = "results-banner banner-failed";
      statusBanner.innerHTML = `
        <h2>📊 EXAMINATION COMPLETED</h2>
        <p style="font-weight:600; margin-top:0.3rem;">
          Your Score: <strong>${netScore} / ${maxTotalMarks} Marks (${scorePercentage}%)</strong>.
          (Passing Mark required: ${passMarks} Marks).
        </p>
        <p style="font-size:0.88rem; color:#fca5a5; margin-top:0.3rem;">
          💪 Keep practicing and work hard to improve in your next assessment attempt!
        </p>
      `;
    }

    if (!isPublished) {
      // Hide detailed scores and breakdown if teacher hasn't published results yet
      document.getElementById("res-score-percent").textContent = "🔒 Pending";
      document.getElementById("res-score-detail").textContent = "Awaiting Publication";
      document.getElementById("res-time-taken").textContent = `${timeSpentMinutes} min`;

      document.getElementById("res-violations-summary").innerHTML = `
        <div class="motivational-quote-box" style="margin:0; padding:1.5rem; text-align:center; background:rgba(99,102,241,0.12); border:1px solid var(--primary); border-radius:var(--radius-md);">
          <h3 style="color:var(--primary); margin-bottom:0.5rem;">🌟 Believe In Your Hard Work!</h3>
          <p style="font-size:1.08rem; font-weight:700; color:var(--text-main); line-height:1.5; margin:0;">
            "RESULT IS ACCUMULATION OF SMALL STEPS YOU MADE. BELIEVE IN YOUR HARDWORK"
          </p>
          <p style="font-size:0.88rem; color:var(--text-muted); margin-top:0.8rem;">
            Your responses and score have been calculated and saved in the database. Results will be published soon by your teacher.
          </p>
        </div>
      `;
      document.getElementById("res-breakdown-container").innerHTML = `
        <div class="log-clean" style="text-align:center; padding:2rem; font-weight:600;">
          🔒 Question breakdown and answer key will be released once your teacher publishes the results.
        </div>
      `;
      return;
    }

    // If published, reveal full scorecard
    document.getElementById("res-score-percent").textContent = `${scorePercentage}%`;
    document.getElementById("res-score-detail").textContent = `${netScore} / ${maxTotalMarks} Marks`;
    document.getElementById("res-time-taken").textContent = `${timeSpentMinutes} min`;

    // Violation Log Summary
    const violationContainer = document.getElementById("res-violations-summary");
    const log = window.proctorEngine.violationsLog;
    if (log.length === 0) {
      violationContainer.innerHTML = `<div class="log-clean">✅ Perfect Integrity Score! No proctoring violations recorded during the test.</div>`;
    } else {
      violationContainer.innerHTML = `
        <h4>🛡️ Proctoring Security Violation Log (${log.length} incidents logged):</h4>
        <ul class="violation-list">
          ${log.map(item => `
            <li>
              <span class="v-time">[${item.timestamp}]</span>
              <span class="v-type">${item.type}</span>:
              <span class="v-desc">${this.escapeHtml(item.description)}</span>
            </li>
          `).join('')}
        </ul>
      `;
    }

    // Detailed Review
    document.getElementById("res-breakdown-container").innerHTML = breakdownHtml.join('');
  }

  resetExamState() {
    this.currentQuiz = null;
    this.userAnswers = {};
    this.flaggedQuestions = new Set();
    this.currentQuestionIndex = 0;
    this.isExamActive = false;
    clearInterval(this.timerInterval);
  }

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.app = new App();
});
