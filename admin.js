/**
 * Admin Module - Authentication, Test Activation Controls, Student Roster & Audit Logs
 * Credentials: ID: shneh | Password: shneh@1234
 */

class AdminManager {
  constructor() {
    this.isLoggedIn = false;
    this.questionsList = [];
    this.bindEvents();
  }

  bindEvents() {
    // Top Bar Admin Open Button
    const btnOpenAdmin = document.getElementById("btn-open-admin");
    if (btnOpenAdmin) {
      btnOpenAdmin.addEventListener("click", () => this.handleOpenAdminClick());
    }

    // Admin Login Modal Actions — wire to type=button to avoid any browser form navigation
    const btnDoLogin = document.getElementById("btn-do-admin-login");
    const btnCancelLogin = document.getElementById("btn-cancel-admin-login");
    
    if (btnDoLogin) {
      btnDoLogin.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.processAdminLogin(e);
      });
    }

    if (btnCancelLogin) {
      btnCancelLogin.addEventListener("click", () => this.hideLoginModal());
    }

    // Admin Logout
    const btnLogout = document.getElementById("btn-admin-logout");
    if (btnLogout) {
      btnLogout.addEventListener("click", () => this.logoutAdmin());
    }

    // Admin Tab Switching
    const tabBtns = document.querySelectorAll(".admin-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const tabTarget = btn.dataset.tab;
        this.switchAdminTab(tabTarget);
      });
    });

    // Test Paper Builder Events
    const btnAddQuestion = document.getElementById("admin-add-question");
    const formSaveQuiz = document.getElementById("admin-form-quiz");
    const btnExportJson = document.getElementById("admin-export-json");
    const inputImportJson = document.getElementById("admin-import-file");

    if (btnAddQuestion) {
      btnAddQuestion.addEventListener("click", () => this.addQuestionField());
    }

    if (formSaveQuiz) {
      formSaveQuiz.addEventListener("submit", (e) => {
        e.preventDefault();
        this.saveNewQuiz();
      });
    }

    if (btnExportJson) {
      btnExportJson.addEventListener("click", () => this.exportCurrentQuizzesJson());
    }

    if (inputImportJson) {
      inputImportJson.addEventListener("change", (e) => this.importQuizzesJson(e));
    }

    // Add Student Form
    const formAddStudent = document.getElementById("admin-form-add-student");
    if (formAddStudent) {
      formAddStudent.addEventListener("submit", (e) => {
        e.preventDefault();
        this.handleAddStudent();
      });
    }
  }

  handleOpenAdminClick() {
    if (this.isLoggedIn) {
      if (window.app) window.app.showView("admin");
      this.switchAdminTab("admin-tab-papers");
      this.renderAllAdminTabs();
    } else {
      this.showLoginModal();
    }
  }

  showLoginModal() {
    const modal = document.getElementById("modal-admin-login");
    const errBox = document.getElementById("admin-login-error");
    const idInput = document.getElementById("admin-user-id");
    const passInput = document.getElementById("admin-user-pass");

    if (errBox) errBox.classList.add("hidden");
    if (idInput) idInput.value = "";
    if (passInput) passInput.value = "";
    if (modal) modal.classList.remove("hidden");
    if (idInput) idInput.focus();
  }

  hideLoginModal() {
    const modal = document.getElementById("modal-admin-login");
    if (modal) modal.classList.add("hidden");
  }

  async processAdminLogin(e) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const idInput = document.getElementById("admin-user-id");
    const passInput = document.getElementById("admin-user-pass");
    const errBox = document.getElementById("admin-login-error");

    const id = idInput ? idInput.value.trim() : "";
    const pass = passInput ? passInput.value.trim() : "";

    if (!id || !pass) {
      if (errBox) {
        errBox.textContent = "⚠️ Please enter both Admin ID and Password!";
        errBox.classList.remove("hidden");
      }
      return false;
    }

    try {
      let isSuccess = false;
      try {
        const res = await window.api.loginAdmin(id, pass);
        if (res && res.success) isSuccess = true;
      } catch (err) {
        isSuccess = window.quizManager.authenticateAdmin(id, pass);
      }

      if (isSuccess) {
        this.isLoggedIn = true;
        this.hideLoginModal();
        if (idInput) idInput.value = "";
        if (passInput) passInput.value = "";

        if (window.app) window.app.showView("admin");
        this.switchAdminTab("admin-tab-papers");
        await this.renderAllAdminTabs();
        return true;
      } else {
        if (errBox) {
          errBox.textContent = "⚠️ Invalid Admin ID or Password! Credentials: shneh / shneh@1234";
          errBox.classList.remove("hidden");
        }
        return false;
      }
    } catch (criticalErr) {
      console.error("Admin Login Error:", criticalErr);
      if (errBox) {
        errBox.textContent = "⚠️ Login processing error. Try again.";
        errBox.classList.remove("hidden");
      }
      return false;
    }
  }

  logoutAdmin() {
    this.isLoggedIn = false;
    if (window.app) {
      if (window.app.loggedInStudent) {
        window.app.showView("studentMenu");
      } else {
        window.app.showView("login");
      }
    }
  }

  switchAdminTab(tabId) {
    document.querySelectorAll(".admin-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.tab === tabId);
    });

    document.querySelectorAll(".admin-tab-content").forEach(content => {
      content.classList.toggle("hidden", content.id !== tabId);
    });

    if (tabId === "admin-tab-papers") this.renderPapersControlList();
    if (tabId === "admin-tab-students") this.renderStudentRosterTable();
    if (tabId === "admin-tab-submissions") this.renderSubmissionsLogTable();
  }

  async renderAllAdminTabs() {
    // Only render the currently active tab — avoids triple API call on every login
    await this.renderPapersControlList();
  }

  // --- TAB 1: TEST PAPERS & ACTIVATION CONTROLS ---
  async renderPapersControlList() {
    const container = document.getElementById("admin-papers-list");
    if (!container) return;

    let quizzes = [];
    try {
      quizzes = await window.api.getQuizzes();
    } catch (e) {
      quizzes = window.quizManager.getAllQuizzes();
    }

    container.innerHTML = "";

    quizzes.forEach(quiz => {
      const isActive = !!quiz.isActive;
      const isPublished = !!quiz.isResultPublished;
      const isHidden = !!quiz.isHidden;
      const qCount = quiz.questions ? quiz.questions.length : 0;
      const card = document.createElement("div");
      card.className = `admin-paper-card ${isActive ? "is-active" : "is-inactive"} ${isHidden ? "is-hidden-paper" : ""}`;

      card.innerHTML = `
        <div class="admin-paper-info">
          <h4>${this.escapeHtml(quiz.title)}</h4>
          <p>${this.escapeHtml(quiz.description)}</p>
          <div class="sub-info">
            ⏱️ ${quiz.timeLimitMinutes} Mins | 📝 ${qCount} Questions | 🎯 Total Marks: ${quiz.totalMarks || 100}
          </div>
        </div>
        <div class="admin-paper-actions">
          <span class="quiz-status-pill ${isActive ? "pill-active" : "pill-inactive"}">
            ${isActive ? "🟢 LIVE" : "🔒 INACTIVE"}
          </span>
          <span class="quiz-status-pill ${isPublished ? "pill-active" : "pill-inactive"}">
            ${isPublished ? "📢 RESULTS PUBLISHED" : "🔒 RESULTS HIDDEN"}
          </span>
          <span class="quiz-status-pill ${isHidden ? "pill-hidden" : "pill-active"}">
            ${isHidden ? "🙈 HIDDEN FROM DASHBOARD" : "👁️ VISIBLE ON DASHBOARD"}
          </span>
          <button type="button" class="btn ${isActive ? "btn-secondary" : "btn-primary"} btn-sm btn-toggle-active">
            ${isActive ? "🔒 Deactivate" : "⚡ Activate"}
          </button>
          <button type="button" class="btn ${isPublished ? "btn-secondary" : "btn-primary"} btn-sm btn-toggle-publish">
            ${isPublished ? "🔒 Unpublish Results" : "📢 Publish Results"}
          </button>
          <button type="button" class="btn ${isHidden ? "btn-primary" : "btn-secondary"} btn-sm btn-toggle-hide">
            ${isHidden ? "👁️ Show on Student Dashboard" : "🙈 Hide from Student Dashboard"}
          </button>
          <button type="button" class="btn btn-danger btn-sm btn-delete-paper">
            🗑️ Delete
          </button>
        </div>
      `;

      // Toggle active status
      card.querySelector(".btn-toggle-active").addEventListener("click", async () => {
        try {
          const res = await window.api.toggleActive(quiz.id);
          quiz.isActive = res.isActive;
        } catch (e) {
          quiz.isActive = window.quizManager.toggleQuizActive(quiz.id);
        }
        await this.renderPapersControlList();
        if (window.app) window.app.renderAvailableTests();
      });

      // Toggle publish result status
      card.querySelector(".btn-toggle-publish").addEventListener("click", async () => {
        let newPublished = false;
        try {
          const res = await window.api.togglePublish(quiz.id);
          newPublished = res.isResultPublished;
          quiz.isResultPublished = newPublished;
        } catch (e) {
          newPublished = window.quizManager.toggleResultPublished(quiz.id);
        }
        alert(newPublished 
          ? `📢 RESULTS PUBLISHED: Students can now see their scorecards for '${quiz.title}'!`
          : `🔒 RESULTS HIDDEN: Results for '${quiz.title}' are now hidden from students.`
        );
        await this.renderPapersControlList();
        if (window.app) window.app.renderStudentPublishedResults();
      });

      // Toggle hide from student dashboard status
      card.querySelector(".btn-toggle-hide").addEventListener("click", async () => {
        let newHidden = false;
        try {
          const res = await window.api.toggleHide(quiz.id);
          newHidden = res.isHidden;
          quiz.isHidden = newHidden;
        } catch (e) {
          newHidden = window.quizManager.toggleQuizHidden(quiz.id);
        }
        alert(newHidden 
          ? `🙈 PAPER HIDDEN: '${quiz.title}' is now hidden from the Student Dashboard.`
          : `👁️ PAPER VISIBLE: '${quiz.title}' is now visible on the Student Dashboard.`
        );
        await this.renderPapersControlList();
        if (window.app) window.app.renderAvailableTests();
      });

      // Delete test paper
      card.querySelector(".btn-delete-paper").addEventListener("click", async () => {
        if (confirm(`Are you sure you want to delete '${quiz.title}'?`)) {
          try {
            await window.api.deleteQuiz(quiz.id);
          } catch (e) {
            window.quizManager.deleteQuiz(quiz.id);
          }
          await this.renderPapersControlList();
          if (window.app) window.app.renderAvailableTests();
        }
      });

      container.appendChild(card);
    });
  }

  // --- TAB 2: CREATE TEST PAPER BUILDER ---
  addQuestionField(data = null) {
    const container = document.getElementById("admin-questions-container");
    if (!container) return;

    const qIndex = container.children.length + 1;
    const card = document.createElement("div");
    card.className = "admin-q-card";
    
    card.innerHTML = `
      <div class="admin-q-card-header">
        <h4>Question #${qIndex}</h4>
        <button type="button" class="btn-icon btn-delete-q" title="Remove Question">🗑️ Remove</button>
      </div>

      <div class="form-group">
        <label>Question Text *</label>
        <textarea class="form-control q-input-text" rows="2" placeholder="Enter question statement..." required>${data ? this.escapeHtml(data.text) : ''}</textarea>
      </div>

      <div class="options-grid">
        <div class="form-group">
          <label>Option A *</label>
          <input type="text" class="form-control q-opt-0" placeholder="Option A" value="${data ? this.escapeHtml(data.options[0] || '') : ''}" required>
        </div>
        <div class="form-group">
          <label>Option B *</label>
          <input type="text" class="form-control q-opt-1" placeholder="Option B" value="${data ? this.escapeHtml(data.options[1] || '') : ''}" required>
        </div>
        <div class="form-group">
          <label>Option C *</label>
          <input type="text" class="form-control q-opt-2" placeholder="Option C" value="${data ? this.escapeHtml(data.options[2] || '') : ''}" required>
        </div>
        <div class="form-group">
          <label>Option D *</label>
          <input type="text" class="form-control q-opt-3" placeholder="Option D" value="${data ? this.escapeHtml(data.options[3] || '') : ''}" required>
        </div>
      </div>

      <div class="form-row" style="margin-top: 0.8rem;">
        <div class="form-group flex-1">
          <label>Correct Option *</label>
          <select class="form-control q-correct-select">
            <option value="0" ${data && data.correctAnswer === 0 ? 'selected' : ''}>Option A</option>
            <option value="1" ${data && data.correctAnswer === 1 ? 'selected' : ''}>Option B</option>
            <option value="2" ${data && data.correctAnswer === 2 ? 'selected' : ''}>Option C</option>
            <option value="3" ${data && data.correctAnswer === 3 ? 'selected' : ''}>Option D</option>
          </select>
        </div>
        <div class="form-group flex-2">
          <label>Solution Explanation (Optional)</label>
          <input type="text" class="form-control q-explanation" placeholder="Brief rationale..." value="${data ? this.escapeHtml(data.explanation || '') : ''}">
        </div>
      </div>
    `;

    card.querySelector(".btn-delete-q").addEventListener("click", () => {
      card.remove();
    });

    container.appendChild(card);
  }

  async saveNewQuiz() {
    const titleInput = document.getElementById("admin-quiz-title");
    const descInput = document.getElementById("admin-quiz-desc");
    const timeInput = document.getElementById("admin-quiz-time");
    const passInput = document.getElementById("admin-quiz-pass");
    const warnInput = document.getElementById("admin-quiz-warnings");

    const cards = document.querySelectorAll(".admin-q-card");
    if (cards.length === 0) {
      alert("Please add at least 1 question to the test form.");
      return;
    }

    const questions = [];
    let isValid = true;

    cards.forEach((card, idx) => {
      const text = card.querySelector(".q-input-text").value.trim();
      const opt0 = card.querySelector(".q-opt-0").value.trim();
      const opt1 = card.querySelector(".q-opt-1").value.trim();
      const opt2 = card.querySelector(".q-opt-2").value.trim();
      const opt3 = card.querySelector(".q-opt-3").value.trim();
      const correctIdx = parseInt(card.querySelector(".q-correct-select").value, 10);
      const exp = card.querySelector(".q-explanation").value.trim();

      if (!text || !opt0 || !opt1 || !opt2 || !opt3) {
        isValid = false;
      }

      questions.push({
        id: `custom_q_${Date.now()}_${idx}`,
        text,
        options: [opt0, opt1, opt2, opt3],
        correctAnswer: correctIdx,
        explanation: exp
      });
    });

    if (!isValid) {
      alert("Please fill in all required question statements and 4 options for each question.");
      return;
    }

    const newQuiz = {
      id: `custom_quiz_${Date.now()}`,
      title: titleInput.value.trim() || "Custom MCQ Assessment",
      description: descInput.value.trim() || "User created multiple choice test form.",
      timeLimitMinutes: parseInt(timeInput.value, 10) || 10,
      passingMarks: parseInt(passInput ? passInput.value : "40", 10) || 40,
      maxViolationsAllowed: parseInt(warnInput.value, 10) || 3,
      isActive: false,
      isResultPublished: false,
      questions
    };

    try {
      await window.api.saveQuiz(newQuiz);
    } catch (e) {
      window.quizManager.saveCustomQuiz(newQuiz);
    }

    alert(`Test Form '${newQuiz.title}' created successfully!`);
    
    // Reset Form
    document.getElementById("admin-form-quiz").reset();
    document.getElementById("admin-questions-container").innerHTML = "";
    
    this.switchAdminTab("admin-tab-papers");
    if (window.app) window.app.renderAvailableTests();
  }

  // --- TAB 3: STUDENT ROSTER MANAGEMENT ---
  async handleAddStudent() {
    const idInput = document.getElementById("new-stu-id");
    const nameInput = document.getElementById("new-stu-name");
    const passInput = document.getElementById("new-stu-pass");
    const classInput = document.getElementById("new-stu-class");

    const id = idInput.value.trim();
    const name = nameInput.value.trim();
    const password = passInput ? passInput.value.trim() : "password123";
    const stuClass = classInput.value.trim();

    if (!id || !name || !password) {
      alert("Student Roll ID, Name, and Password are required.");
      return;
    }

    try {
      await window.api.addStudent({ id, name, password, class: stuClass });
    } catch (e) {
      window.quizManager.addStudent({ id, name, password, class: stuClass });
    }

    alert(`Student '${name}' registered in database with password '${password}'!`);

    idInput.value = "";
    nameInput.value = "";
    if (passInput) passInput.value = "";
    classInput.value = "";

    await this.renderStudentRosterTable();
  }

  async renderStudentRosterTable() {
    const container = document.getElementById("admin-students-list");
    if (!container) return;

    let students = [];
    try {
      students = await window.api.getStudents();
    } catch (e) {
      students = window.quizManager.getStudents();
    }

    if (students.length === 0) {
      container.innerHTML = `<div class="sub-info">No students registered in roster yet.</div>`;
      return;
    }

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Student Roll ID</th>
              <th>Full Name</th>
              <th>Password</th>
              <th>Class / Batch</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${students.map(s => `
              <tr>
                <td><strong>${this.escapeHtml(s.id)}</strong></td>
                <td>${this.escapeHtml(s.name)}</td>
                <td><code style="background:rgba(255,255,255,0.1); padding:2px 6px; border-radius:4px;">${this.escapeHtml(s.password || 'stu101@password')}</code></td>
                <td>${this.escapeHtml(s.class || 'N/A')}</td>
                <td>
                  <button type="button" class="btn btn-secondary btn-sm btn-reset-attempt" data-id="${s.id}" title="Reset single attempt for all papers">
                    🔄 Reset Attempt
                  </button>
                  <button type="button" class="btn btn-danger btn-sm btn-del-student" data-id="${s.id}">
                    🗑️ Remove Student
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    container.querySelectorAll(".btn-reset-attempt").forEach(btn => {
      btn.addEventListener("click", async () => {
        const stuId = btn.dataset.id;
        try {
          await window.api.resetStudentAttempt(stuId);
        } catch (e) {
          const quizzes = window.quizManager.getAllQuizzes();
          quizzes.forEach(q => window.quizManager.resetStudentAttempt(stuId, q.id));
        }
        alert(`✅ Attempts reset in database! Student ${stuId} can now re-take test papers.`);
      });
    });

    container.querySelectorAll(".btn-del-student").forEach(btn => {
      btn.addEventListener("click", async () => {
        const stuId = btn.dataset.id;
        if (confirm(`Remove student ${stuId} from directory?`)) {
          try {
            await window.api.deleteStudent(stuId);
          } catch (e) {
            window.quizManager.deleteStudent(stuId);
          }
          await this.renderStudentRosterTable();
        }
      });
    });
  }

  // --- TAB 4: SUBMISSIONS AUDIT LOGS ---
  async renderSubmissionsLogTable() {
    const container = document.getElementById("admin-submissions-list");
    if (!container) return;

    let submissions = [];
    try {
      submissions = await window.api.getSubmissions();
    } catch (e) {
      submissions = window.quizManager.getSubmissions();
    }

    if (submissions.length === 0) {
      container.innerHTML = `<div class="sub-info">No exam submissions recorded yet.</div>`;
      return;
    }

    container.innerHTML = `
      <div class="admin-table-wrapper">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Date / Time</th>
              <th>Candidate</th>
              <th>Test Paper</th>
              <th>Score</th>
              <th>Percentage</th>
              <th>Security Violations</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${submissions.map(sub => `
              <tr>
                <td><span class="sub-info">${sub.timestamp}</span></td>
                <td><strong>${this.escapeHtml(sub.candidateName)}</strong><br><span class="sub-info">${this.escapeHtml(sub.candidateId)}</span></td>
                <td>${this.escapeHtml(sub.quizTitle)}</td>
                <td><strong>${sub.score} / ${sub.totalMarks}</strong></td>
                <td><span class="${sub.scorePercentage >= 50 ? 'text-green' : 'text-red'}">${sub.scorePercentage}%</span></td>
                <td><span class="${sub.violationsCount > 0 ? 'text-yellow' : 'text-green'}">⚠️ ${sub.violationsCount} Warning(s)</span></td>
                <td>
                  ${sub.isDisqualified 
                    ? '<span class="status-fail">⛔ Disqualified</span>' 
                    : '<span class="status-pass">✓ Submitted</span>'}
                </td>
                <td>
                  <button type="button" class="btn btn-secondary btn-sm btn-view-submission" data-subid="${sub.id}">
                    👁️ View Full Response & Result
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;

    // Attach click listeners for View Full Response button
    container.querySelectorAll(".btn-view-submission").forEach(btn => {
      btn.addEventListener("click", () => {
        const subId = btn.dataset.subid;
        const sub = submissions.find(s => s.id === subId);
        if (sub) {
          this.viewSubmissionDetails(sub);
        }
      });
    });

    // Wire close modal button if not wired yet
    const btnClose = document.getElementById("btn-close-sub-modal");
    const modal = document.getElementById("modal-submission-detail");
    if (btnClose && modal) {
      btnClose.onclick = () => modal.classList.add("hidden");
      modal.onclick = (e) => {
        if (e.target === modal) modal.classList.add("hidden");
      };
    }
  }

  viewSubmissionDetails(sub) {
    const modal = document.getElementById("modal-submission-detail");
    const body = document.getElementById("sub-modal-body");
    const titleElem = document.getElementById("sub-modal-title");
    if (!modal || !body) return;

    if (titleElem) {
      titleElem.textContent = `📋 Submission Inspector: ${sub.candidateName} (${sub.candidateId})`;
    }

    // Determine details array
    let details = sub.detailedResults || [];
    
    // If legacy submission without detailedResults, attempt reconstruction from questionsSnapshot or userAnswers
    if ((!details || details.length === 0) && sub.questionsSnapshot && sub.questionsSnapshot.length > 0) {
      const uAnswers = sub.userAnswers || {};
      details = sub.questionsSnapshot.map((q, idx) => {
        const userAns = uAnswers[q.id];
        const isAttempted = userAns !== undefined;
        const isCorrect = isAttempted && userAns === q.correctAnswer;
        return {
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
          explanation: q.explanation || ""
        };
      });
    }

    const summary = sub.summaryResult || {};
    const correctCount = summary.correctCount !== undefined ? summary.correctCount : (details.filter(d => d.isCorrect).length);
    const incorrectCount = summary.incorrectCount !== undefined ? summary.incorrectCount : (details.filter(d => d.isAttempted && !d.isCorrect).length);
    const unattemptedCount = summary.unattemptedCount !== undefined ? summary.unattemptedCount : (details.filter(d => !d.isAttempted).length);
    const totalQ = details.length || (correctCount + incorrectCount + unattemptedCount);

    body.innerHTML = `
      <div class="sub-detail-header-card">
        <div class="sub-detail-grid">
          <div>
            <label>Candidate Name:</label> <strong>${this.escapeHtml(sub.candidateName)}</strong>
          </div>
          <div>
            <label>Candidate ID:</label> <strong>${this.escapeHtml(sub.candidateId)}</strong>
          </div>
          <div>
            <label>Test Paper:</label> <strong>${this.escapeHtml(sub.quizTitle)}</strong>
          </div>
          <div>
            <label>Submission Time:</label> <strong>${sub.timestamp}</strong>
          </div>
          <div>
            <label>Score Achieved:</label> <strong class="${sub.scorePercentage >= 50 ? 'text-green' : 'text-red'}">${sub.score} / ${sub.totalMarks} (${sub.scorePercentage}%)</strong>
          </div>
          <div>
            <label>Proctor Status:</label> 
            ${sub.isDisqualified 
              ? '<span class="status-fail">⛔ Disqualified</span>' 
              : sub.violationsCount > 0 
                ? `<span class="status-fail" style="color:var(--warning);">⚠️ ${sub.violationsCount} Violation(s)</span>`
                : '<span class="status-pass">✓ Clean Exam</span>'}
          </div>
        </div>

        <div class="sub-stat-chips" style="margin-top:1rem; display:flex; gap:1rem; flex-wrap:wrap;">
          <div class="chip chip-green">✓ Correct: ${correctCount}</div>
          <div class="chip chip-red">✗ Incorrect: ${incorrectCount}</div>
          <div class="chip chip-gray">⭕ Unattempted: ${unattemptedCount}</div>
          <div class="chip chip-blue">⏱️ Total Questions: ${totalQ}</div>
        </div>
      </div>

      ${sub.violationsLog && sub.violationsLog.length > 0 ? `
        <div class="sub-violations-box">
          <h4>🚨 Proctoring Security Audit Log (${sub.violationsLog.length} Events)</h4>
          <ul class="violations-list">
            ${sub.violationsLog.map(v => `
              <li>
                <span class="violation-time">[${v.timestamp || 'N/A'}]</span>
                <span class="violation-msg">${this.escapeHtml(v.type || v.reason || 'Security Warning')} (Warning #${v.count || 1})</span>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="sub-questions-breakdown">
        <h3>📝 Complete Question & Response Breakdown</h3>
        ${details.length > 0 ? details.map((d, idx) => `
          <div class="result-question-card ${d.isCorrect ? 'correct' : d.isAttempted ? 'incorrect' : 'unattempted'}">
            <div class="result-card-header">
              <span class="result-q-num">Q${d.questionNumber || (idx + 1)}</span>
              <span class="result-status-badge ${d.isCorrect ? 'status-pass' : d.isAttempted ? 'status-fail' : 'status-none'}">
                ${d.isCorrect ? `✓ Correct${d.marksAwarded ? ` (+${d.marksAwarded})` : ''}` : d.isAttempted ? `✗ Incorrect${d.marksAwarded !== undefined ? ` (${d.marksAwarded})` : ''}` : '⭕ Unattempted (0)'}
              </span>
            </div>
            <p class="result-q-text">${this.escapeHtml(d.questionText)}</p>
            <div class="result-answers">
              <p><strong>Candidate Response:</strong> <span class="${d.isCorrect ? 'text-green' : d.isAttempted ? 'text-red' : 'text-yellow'}">${this.escapeHtml(d.userAnswerText || 'Not Attempted')}</span></p>
              ${!d.isCorrect ? `<p><strong>Correct Answer:</strong> <span class="text-green">${this.escapeHtml(d.correctAnswerText)}</span></p>` : ''}
            </div>
            ${d.explanation ? `<div class="result-explanation"><strong>Explanation:</strong> ${this.escapeHtml(d.explanation)}</div>` : ''}
          </div>
        `).join('') : `
          <p style="color:var(--text-muted);">No itemized question details captured for this submission.</p>
        `}
      </div>
    `;

    modal.classList.remove("hidden");
  }

  exportCurrentQuizzesJson() {
    const quizzes = window.quizManager.getAllQuizzes();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quizzes, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `proctor_quizzes_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }

  importQuizzesJson(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (Array.isArray(imported)) {
          imported.forEach(q => window.quizManager.saveCustomQuiz(q));
          alert(`Successfully imported ${imported.length} test form(s)!`);
          this.renderPapersControlList();
          if (window.app) window.app.renderAvailableTests();
        } else {
          alert("Invalid JSON format.");
        }
      } catch (err) {
        alert("Could not parse JSON file: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  escapeHtml(str) {
    if (!str) return "";
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.adminManager = new AdminManager();
});
