/**
 * API Client Module - Firebase Firestore Data Integration
 * Fully serverless cloud persistence for Paradigm Exam platform.
 */

const firebaseConfig = {
  apiKey: "AIzaSyDeW2w-xOYLCXVlMYeARvKbjkWHDdxFEXM",
  authDomain: "paradigm-exam.firebaseapp.com",
  projectId: "paradigm-exam",
  storageBucket: "paradigm-exam.firebasestorage.app",
  messagingSenderId: "1064365865073",
  appId: "1:1064365865073:web:57a6286f73ec9f5f1903d0",
  measurementId: "G-T9ML78KEQ7"
};

// Initialize Firebase App
if (typeof firebase !== 'undefined') {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}

class ApiClient {
  constructor() {
    this.db = (typeof firebase !== 'undefined') ? firebase.firestore() : null;
    this.seeded = false;
    this.initSeed();
  }

  async initSeed() {
    if (!this.db || this.seeded) return;
    try {
      // Auto-seed initial quizzes if Firestore collection is empty
      const quizzesSnap = await this.db.collection('quizzes').limit(1).get();
      if (quizzesSnap.empty && window.quizManager) {
        const defaultQuizzes = window.quizManager.getAllQuizzes();
        for (const q of defaultQuizzes) {
          await this.db.collection('quizzes').doc(q.id).set(q, { merge: true });
        }
        console.log("🔥 Firebase: Default quizzes seeded into Firestore");
      }

      // Auto-seed initial students if Firestore collection is empty
      const studentsSnap = await this.db.collection('students').limit(1).get();
      if (studentsSnap.empty && window.quizManager) {
        const defaultStudents = window.quizManager.getStudents();
        for (const s of defaultStudents) {
          const normId = (s.id || '').trim().toUpperCase();
          await this.db.collection('students').doc(normId).set({ ...s, id: normId }, { merge: true });
        }
        console.log("🔥 Firebase: Default student roster seeded into Firestore");
      }
      this.seeded = true;
    } catch (err) {
      console.warn("Firebase seeding note:", err.message);
    }
  }

  // Student Auth
  async loginStudent(id, password) {
    const normId = (id || '').trim().toUpperCase();
    if (this.db) {
      try {
        const doc = await this.db.collection('students').doc(normId).get();
        if (doc.exists) {
          const student = doc.data();
          if (student.password === password) {
            return { success: true, student };
          }
        }
        // Try fallback query for non-normalized keys
        const snap = await this.db.collection('students').get();
        let found = null;
        snap.forEach(d => {
          const s = d.data();
          if ((s.id || '').toUpperCase() === normId && s.password === password) {
            found = s;
          }
        });
        if (found) return { success: true, student: found };
      } catch (e) {
        console.warn("Firestore student login fallback:", e.message);
      }
    }
    // Local QuizManager Fallback
    const student = window.quizManager ? window.quizManager.authenticateStudent(id, password) : null;
    if (student) return { success: true, student };
    throw new Error(`Invalid credentials for Student ID '${id}'`);
  }

  // Admin Auth
  async loginAdmin(id, password) {
    const normId = (id || '').trim().toLowerCase();
    if (normId === 'shneh' && password === 'shneh@1234') {
      return { success: true, admin: { id: 'shneh' } };
    }
    throw new Error('Invalid Admin ID or Password');
  }

  // Quizzes CRUD
  async getQuizzes() {
    if (this.db) {
      try {
        const snap = await this.db.collection('quizzes').get();
        if (!snap.empty) {
          const quizzes = [];
          snap.forEach(doc => quizzes.push(doc.data()));
          return quizzes;
        }
      } catch (e) {
        console.warn("Firestore getQuizzes fallback:", e.message);
      }
    }
    return window.quizManager ? window.quizManager.getAllQuizzes() : [];
  }

  async getQuizById(id) {
    if (this.db) {
      try {
        const doc = await this.db.collection('quizzes').doc(id).get();
        if (doc.exists) return doc.data();
      } catch (e) {
        console.warn("Firestore getQuizById fallback:", e.message);
      }
    }
    return window.quizManager ? window.quizManager.getQuizById(id) : null;
  }

  async saveQuiz(quiz) {
    if (this.db) {
      try {
        await this.db.collection('quizzes').doc(quiz.id).set(quiz, { merge: true });
        console.log("🔥 Firebase: Quiz saved successfully", quiz.id);
      } catch (e) {
        console.warn("Firestore saveQuiz fallback:", e.message);
        if (window.quizManager) window.quizManager.saveCustomQuiz(quiz);
      }
    } else if (window.quizManager) {
      window.quizManager.saveCustomQuiz(quiz);
    }
    return { success: true, quiz };
  }

  async toggleActive(id) {
    let newStatus = false;
    if (this.db) {
      try {
        const docRef = this.db.collection('quizzes').doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
          newStatus = !doc.data().isActive;
          await docRef.update({ isActive: newStatus });
          return { success: true, isActive: newStatus };
        }
      } catch (e) {
        console.warn("Firestore toggleActive fallback:", e.message);
      }
    }
    if (window.quizManager) {
      newStatus = window.quizManager.toggleQuizActive(id);
    }
    return { success: true, isActive: newStatus };
  }

  async togglePublish(id) {
    let newStatus = false;
    if (this.db) {
      try {
        const docRef = this.db.collection('quizzes').doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
          newStatus = !doc.data().isResultPublished;
          await docRef.update({ isResultPublished: newStatus });
          return { success: true, isResultPublished: newStatus };
        }
      } catch (e) {
        console.warn("Firestore togglePublish fallback:", e.message);
      }
    }
    if (window.quizManager) {
      newStatus = window.quizManager.toggleResultPublished(id);
    }
    return { success: true, isResultPublished: newStatus };
  }

  async deleteQuiz(id) {
    if (this.db) {
      try {
        await this.db.collection('quizzes').doc(id).delete();
      } catch (e) {
        console.warn("Firestore deleteQuiz fallback:", e.message);
        if (window.quizManager) window.quizManager.deleteQuiz(id);
      }
    } else if (window.quizManager) {
      window.quizManager.deleteQuiz(id);
    }
    return { success: true };
  }

  // Student Roster CRUD
  async getStudents() {
    if (this.db) {
      try {
        const snap = await this.db.collection('students').get();
        if (!snap.empty) {
          const students = [];
          snap.forEach(doc => students.push(doc.data()));
          return students;
        }
      } catch (e) {
        console.warn("Firestore getStudents fallback:", e.message);
      }
    }
    return window.quizManager ? window.quizManager.getStudents() : [];
  }

  async addStudent(student) {
    const normId = (student.id || '').trim().toUpperCase();
    const studentData = { ...student, id: normId };
    if (this.db) {
      try {
        await this.db.collection('students').doc(normId).set(studentData, { merge: true });
        console.log("🔥 Firebase: Student saved", normId);
      } catch (e) {
        console.warn("Firestore addStudent fallback:", e.message);
        if (window.quizManager) window.quizManager.addStudent(studentData);
      }
    } else if (window.quizManager) {
      window.quizManager.addStudent(studentData);
    }
    return { success: true, student: studentData };
  }

  async deleteStudent(id) {
    const normId = (id || '').trim().toUpperCase();
    if (this.db) {
      try {
        await this.db.collection('students').doc(normId).delete();
      } catch (e) {
        console.warn("Firestore deleteStudent fallback:", e.message);
        if (window.quizManager) window.quizManager.deleteStudent(normId);
      }
    } else if (window.quizManager) {
      window.quizManager.deleteStudent(normId);
    }
    return { success: true };
  }

  // Attempts & Submissions
  async checkAttempt(studentId, quizId) {
    const normStudent = (studentId || '').trim().toUpperCase();
    const attemptKey = `${normStudent}_${quizId}`;
    if (this.db) {
      try {
        const doc = await this.db.collection('attempts').doc(attemptKey).get();
        if (doc.exists) {
          return { hasAttempted: true, attempt: doc.data() };
        }
        return { hasAttempted: false };
      } catch (e) {
        console.warn("Firestore checkAttempt fallback:", e.message);
      }
    }
    const hasAttempted = window.quizManager ? window.quizManager.hasStudentAttempted(normStudent, quizId) : false;
    return { hasAttempted };
  }

  async submitExam(submission) {
    const normStudent = (submission.candidateId || '').trim().toUpperCase();
    const quizId = submission.quizId;
    const attemptKey = `${normStudent}_${quizId}`;

    if (this.db) {
      try {
        // Save submission doc
        const subId = submission.id || `SUB-${Date.now()}`;
        await this.db.collection('submissions').doc(subId).set(submission);

        // Record attempt lock in Firestore
        await this.db.collection('attempts').doc(attemptKey).set({
          studentId: normStudent,
          quizId,
          timestamp: new Date().toLocaleString()
        });

        console.log("🔥 Firebase: Exam submission & attempt lock saved successfully");
        return { success: true };
      } catch (e) {
        console.warn("Firestore submitExam fallback:", e.message);
      }
    }

    if (window.quizManager) {
      window.quizManager.addSubmission(submission);
      window.quizManager.recordStudentAttempt(normStudent, quizId);
    }
    return { success: true };
  }

  async getSubmissions(studentId = '') {
    if (this.db) {
      try {
        const snap = await this.db.collection('submissions').get();
        let subs = [];
        snap.forEach(doc => subs.push(doc.data()));
        if (studentId) {
          const normStudent = studentId.trim().toUpperCase();
          subs = subs.filter(s => (s.candidateId || '').toUpperCase() === normStudent);
        }
        return subs;
      } catch (e) {
        console.warn("Firestore getSubmissions fallback:", e.message);
      }
    }
    if (window.quizManager) {
      const allSubs = window.quizManager.getSubmissions();
      if (studentId) {
        const normStudent = studentId.trim().toUpperCase();
        return allSubs.filter(s => (s.candidateId || '').toUpperCase() === normStudent);
      }
      return allSubs;
    }
    return [];
  }

  async resetStudentAttempt(studentId) {
    const normStudent = (studentId || '').trim().toUpperCase();
    if (this.db) {
      try {
        const snap = await this.db.collection('attempts').get();
        const batch = this.db.batch();
        let count = 0;
        snap.forEach(doc => {
          if (doc.id.startsWith(`${normStudent}_`)) {
            batch.delete(doc.ref);
            count++;
          }
        });
        if (count > 0) {
          await batch.commit();
          console.log(`🔥 Firebase: ${count} attempt(s) reset for student ${normStudent}`);
        }
      } catch (e) {
        console.warn("Firestore resetStudentAttempt fallback:", e.message);
      }
    }
    if (window.quizManager) {
      const quizzes = window.quizManager.getAllQuizzes();
      quizzes.forEach(q => window.quizManager.resetStudentAttempt(normStudent, q.id));
    }
    return { success: true };
  }
}

window.api = new ApiClient();
