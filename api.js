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
      if (window.quizManager) {
        const defaultQuizzes = window.quizManager.getAllQuizzes();
        const validIds = new Set(defaultQuizzes.map(q => q.id));

        // Purge deprecated quizzes from Firestore
        const snap = await this.db.collection('quizzes').get();
        if (!snap.empty) {
          const deletePromises = [];
          snap.forEach(doc => {
            if (!validIds.has(doc.id)) {
              deletePromises.push(this.db.collection('quizzes').doc(doc.id).delete());
              console.log(`🔥 Firebase: Removed deprecated quiz ${doc.id} from Firestore`);
            }
          });
          if (deletePromises.length > 0) {
            await Promise.all(deletePromises);
          }
        }

        // Seed / Update current default quizzes in Firestore
        for (const q of defaultQuizzes) {
          const docRef = this.db.collection('quizzes').doc(q.id);
          await docRef.set(q, { merge: true });
          console.log(`🔥 Firebase: Quiz ${q.id} auto-seeded into Firestore`);
        }
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
    const localQuizzes = window.quizManager ? window.quizManager.getAllQuizzes() : [];
    try {
      await this.initSeed();
      if (this.db) {
        const snap = await this.db.collection('quizzes').get();
        if (!snap.empty) {
          const quizzes = [];
          snap.forEach(doc => quizzes.push(doc.data()));
          if (quizzes.some(q => q.id && q.id.includes('vijayantha') && Array.isArray(q.questions) && q.questions.length >= 120)) {
            return quizzes;
          }
        }
      }
    } catch (e) {
      console.warn("Firestore getQuizzes fallback:", e.message);
    }
    return localQuizzes;
  }

  async getQuizById(id) {
    if (this.db) {
      try {
        const doc = await this.db.collection('quizzes').doc(id).get();
        if (doc.exists) {
          const data = doc.data();
          if (data && Array.isArray(data.questions) && data.questions.length > 0) {
            return data;
          }
        }
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

  async toggleHide(id) {
    let newStatus = false;
    if (this.db) {
      try {
        const docRef = this.db.collection('quizzes').doc(id);
        const doc = await docRef.get();
        if (doc.exists) {
          newStatus = !doc.data().isHidden;
          await docRef.update({ isHidden: newStatus });
          return { success: true, isHidden: newStatus };
        }
      } catch (e) {
        console.warn("Firestore toggleHide fallback:", e.message);
      }
    }
    if (window.quizManager) {
      newStatus = window.quizManager.toggleQuizHidden(id);
    }
    return { success: true, isHidden: newStatus };
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
    const subId = submission.id || `SUB-${Date.now()}`;

    // Clean payload to prevent undefined property errors in Firestore
    const cleanSubmission = JSON.parse(JSON.stringify(submission));

    // 1. ALWAYS persist to local QuizManager / localStorage first (Zero Data Loss)
    if (window.quizManager) {
      window.quizManager.addSubmission(cleanSubmission);
      window.quizManager.recordStudentAttempt(normStudent, quizId);
    }

    // 2. Also try posting to local Express server if available
    try {
      fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanSubmission)
      }).catch(() => {});
    } catch (e) {}

    // 3. Save to Firebase Firestore via SDK if available
    if (this.db) {
      try {
        await this.db.collection('submissions').doc(subId).set(cleanSubmission, { merge: true });
        await this.db.collection('attempts').doc(attemptKey).set({
          studentId: normStudent,
          quizId,
          timestamp: new Date().toLocaleString()
        });
        console.log("🔥 Firebase SDK: Exam submission & attempt lock saved successfully");
      } catch (e) {
        console.warn("Firestore SDK submitExam note:", e.message);
      }
    }

    // 4. Save to Firebase REST API as cloud backup
    try {
      const BASE_URL = `https://firestore.googleapis.com/v1/projects/paradigm-exam/databases/(default)/documents`;
      const API_KEY = `AIzaSyDeW2w-xOYLCXVlMYeARvKbjkWHDdxFEXM`;
      
      const toValue = (v) => {
        if (v === null || v === undefined) return { nullValue: null };
        if (typeof v === 'boolean') return { booleanValue: v };
        if (typeof v === 'number') {
          if (isNaN(v) || !isFinite(v)) return { nullValue: null };
          return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
        }
        if (typeof v === 'string') return { stringValue: v };
        if (Array.isArray(v)) {
          return v.length > 0 ? { arrayValue: { values: v.map(toValue) } } : { arrayValue: {} };
        }
        if (typeof v === 'object') {
          const fields = {};
          for (const [k, val] of Object.entries(v)) fields[k] = toValue(val);
          return { mapValue: { fields } };
        }
        return { stringValue: String(v) };
      };

      const fields = {};
      for (const [k, v] of Object.entries(cleanSubmission)) fields[k] = toValue(v);

      await fetch(`${BASE_URL}/submissions/${subId}?key=${API_KEY}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields })
      });

      const attemptFields = {
        studentId: { stringValue: normStudent },
        quizId: { stringValue: quizId },
        timestamp: { stringValue: new Date().toLocaleString() }
      };

      await fetch(`${BASE_URL}/attempts/${attemptKey}?key=${API_KEY}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fields: attemptFields })
      });

      console.log("🔥 Firebase REST API: Exam submission synced to cloud");
    } catch (restErr) {
      console.warn("Firestore REST submitExam note:", restErr.message);
    }

    return { success: true };
  }

  async getSubmissions(studentId = '') {
    const combinedMap = new Map();

    // Layer 1: Load from local QuizManager (localStorage)
    if (window.quizManager) {
      const localSubs = window.quizManager.getSubmissions() || [];
      localSubs.forEach(s => {
        if (s && s.id) combinedMap.set(s.id, s);
      });
    }

    // Layer 2: Load from Firebase Firestore
    if (this.db) {
      try {
        const snap = await this.db.collection('submissions').get();
        if (!snap.empty) {
          snap.forEach(doc => {
            const data = doc.data();
            if (data && data.id) combinedMap.set(data.id, data);
          });
        }
      } catch (e) {
        console.warn("Firestore getSubmissions note:", e.message);
      }
    }

    // Layer 3: Load from Express server API if available
    try {
      const res = await fetch('/api/submissions');
      if (res.ok) {
        const serverSubs = await res.json();
        if (Array.isArray(serverSubs)) {
          serverSubs.forEach(s => {
            if (s && s.id) combinedMap.set(s.id, s);
          });
        }
      }
    } catch (e) {}

    let allSubmissions = Array.from(combinedMap.values());

    // Sort newest first
    allSubmissions.sort((a, b) => {
      const tA = new Date(a.timestamp || 0).getTime() || 0;
      const tB = new Date(b.timestamp || 0).getTime() || 0;
      return tB - tA;
    });

    if (studentId) {
      const normStudent = String(studentId).trim().toUpperCase();
      allSubmissions = allSubmissions.filter(s => 
        String(s.candidateId || '').trim().toUpperCase() === normStudent
      );
    }

    return allSubmissions;
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
