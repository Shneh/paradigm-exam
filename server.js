/**
 * Server.js - Fullstack Express Backend & Persistent Database Engine for Paradigm Exam
 * Port: 8080 or process.env.PORT
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
const DB_FILE = path.join(__dirname, 'data', 'db.json');

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(express.static(__dirname));

// Ensure data directory exists
if (!fs.existsSync(path.join(__dirname, 'data'))) {
  fs.mkdirSync(path.join(__dirname, 'data'), { recursive: true });
}

// Read questions.js fallback data for seeding
function loadInitialQuizzes() {
  try {
    const qFile = path.join(__dirname, 'questions.js');
    if (fs.existsSync(qFile)) {
      const content = fs.readFileSync(qFile, 'utf8');
      // Extract DEFAULT_QUIZZES array using regex
      const match = content.match(/const DEFAULT_QUIZZES = (\[[\s\S]*?\]);/);
      if (match && match[1]) {
        return eval(match[1]);
      }
    }
  } catch (e) {
    console.warn("Could not load initial quizzes from questions.js:", e);
  }

  // Basic fallback
  return [
    {
      id: "nda-2-2023-maths",
      title: "UPSC NDA (II) 2023 - Mathematics Official Question Paper",
      description: "Authentic UPSC NDA & NA II 2023 Mathematics Paper. 120 Questions | 2.5 Hours | Total Marks: 300.",
      timeLimitMinutes: 150,
      maxViolationsAllowed: 3,
      marksPerCorrect: 2.5,
      negativeMarksPerWrong: 0.8333333333333334,
      totalMarks: 300,
      passingMarks: 120,
      isActive: true,
      isResultPublished: false,
      questions: []
    }
  ];
}

// Database I/O Helpers
function readDB() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const raw = fs.readFileSync(DB_FILE, 'utf8');
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error("Error reading database file:", e);
  }

  // Initial Seed
  const initialData = {
    quizzes: loadInitialQuizzes(),
    students: [
      { id: "STU-101", name: "Alex Johnson", password: "stu101@password", class: "NDA Prep Batch A" },
      { id: "STU-102", name: "Rahul Sharma", password: "stu102@password", class: "NDA Prep Batch B" },
      { id: "STU-103", name: "Priya Singh", password: "stu103@password", class: "Science 12th" }
    ],
    admin: { id: "shneh", password: "shneh@1234" },
    submissions: [],
    attempts: {} // { "STUDENTID_QUIZID": { timestamp } }
  };

  saveDB(initialData);
  return initialData;
}

function saveDB(dbData) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(dbData, null, 2), 'utf8');
  } catch (e) {
    console.error("Error saving to database file:", e);
  }
}

// Initialize Database
let db = readDB();

// ==================== REST API ENDPOINTS ====================

// Healthcheck
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 1. AUTHENTICATION
app.post('/api/auth/student', (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({ error: 'Student Roll ID and password are required.' });
  }

  db = readDB();
  const student = db.students.find(s => String(s.id).trim().toUpperCase() === String(id).trim().toUpperCase());
  if (student && String(student.password).trim() === String(password).trim()) {
    return res.json({ success: true, student: { id: student.id, name: student.name, class: student.class } });
  }

  res.status(401).json({ error: 'Invalid Student Credentials. Check your Roll ID and Password.' });
});

app.post('/api/auth/admin', (req, res) => {
  const { id, password } = req.body;
  if (!id || !password) {
    return res.status(400).json({ error: 'Admin ID and Password are required.' });
  }

  db = readDB();
  const adminId = db.admin ? db.admin.id : "shneh";
  const adminPass = db.admin ? db.admin.password : "shneh@1234";

  if (String(id).trim().toLowerCase() === String(adminId).trim().toLowerCase() && String(password).trim() === String(adminPass).trim()) {
    return res.json({ success: true, admin: { id: adminId } });
  }
  res.status(401).json({ error: 'Invalid Administrator Credentials.' });
});

// 2. QUIZZES / TEST PAPERS
app.get('/api/quizzes', (req, res) => {
  db = readDB();
  res.json(db.quizzes);
});

app.get('/api/quizzes/:id', (req, res) => {
  db = readDB();
  const quiz = db.quizzes.find(q => q.id === req.params.id);
  if (!quiz) return res.status(404).json({ error: 'Test paper not found.' });
  res.json(quiz);
});

app.post('/api/quizzes', (req, res) => {
  const newQuiz = req.body;
  if (!newQuiz || !newQuiz.id || !newQuiz.title) {
    return res.status(400).json({ error: 'Invalid quiz payload.' });
  }

  db = readDB();
  db.quizzes.push(newQuiz);
  saveDB(db);
  res.json({ success: true, quiz: newQuiz });
});

app.patch('/api/quizzes/:id/toggle-active', (req, res) => {
  db = readDB();
  const quiz = db.quizzes.find(q => q.id === req.params.id);
  if (!quiz) return res.status(404).json({ error: 'Test paper not found.' });

  quiz.isActive = !quiz.isActive;
  saveDB(db);
  res.json({ success: true, isActive: quiz.isActive });
});

app.patch('/api/quizzes/:id/toggle-publish', (req, res) => {
  db = readDB();
  const quiz = db.quizzes.find(q => q.id === req.params.id);
  if (!quiz) return res.status(404).json({ error: 'Test paper not found.' });

  quiz.isResultPublished = !quiz.isResultPublished;
  saveDB(db);
  res.json({ success: true, isResultPublished: quiz.isResultPublished });
});

app.delete('/api/quizzes/:id', (req, res) => {
  db = readDB();
  db.quizzes = db.quizzes.filter(q => q.id !== req.params.id);
  saveDB(db);
  res.json({ success: true });
});

// 3. STUDENT ROSTER
app.get('/api/students', (req, res) => {
  db = readDB();
  res.json(db.students);
});

app.post('/api/students', (req, res) => {
  const { id, name, password, class: stuClass } = req.body;
  if (!id || !name || !password) {
    return res.status(400).json({ error: 'ID, Name, and Password are required.' });
  }

  db = readDB();
  const existing = db.students.find(s => String(s.id).trim().toUpperCase() === String(id).trim().toUpperCase());
  if (existing) {
    existing.name = name;
    existing.password = password;
    existing.class = stuClass;
  } else {
    db.students.push({ id, name, password, class: stuClass });
  }

  saveDB(db);
  res.json({ success: true, students: db.students });
});

app.delete('/api/students/:id', (req, res) => {
  db = readDB();
  db.students = db.students.filter(s => String(s.id).trim().toUpperCase() !== String(req.params.id).trim().toUpperCase());
  saveDB(db);
  res.json({ success: true, students: db.students });
});

// 4. ATTEMPTS & SUBMISSIONS
app.get('/api/attempts/check', (req, res) => {
  const { studentId, quizId } = req.query;
  if (!studentId || !quizId) return res.json({ hasAttempted: false });

  db = readDB();
  const cleanId = String(studentId).trim().toUpperCase();
  const key = `${cleanId}_${quizId}`;
  
  const inRegistry = !!db.attempts[key];
  const inSubmissions = db.submissions.some(sub => 
    sub.candidateId && String(sub.candidateId).trim().toUpperCase() === cleanId && sub.quizId === quizId
  );

  res.json({ hasAttempted: inRegistry || inSubmissions });
});

app.post('/api/submissions', (req, res) => {
  const submission = req.body;
  if (!submission || !submission.candidateId || !submission.quizId) {
    return res.status(400).json({ error: 'Invalid submission payload.' });
  }

  db = readDB();
  db.submissions.unshift(submission);

  // Lock Single Attempt in database
  const cleanId = String(submission.candidateId).trim().toUpperCase();
  const key = `${cleanId}_${submission.quizId}`;
  db.attempts[key] = { timestamp: submission.timestamp || new Date().toLocaleString() };

  saveDB(db);
  res.json({ success: true, submission });
});

app.get('/api/submissions', (req, res) => {
  db = readDB();
  const { studentId } = req.query;
  if (studentId) {
    const cleanId = String(studentId).trim().toUpperCase();
    const filtered = db.submissions.filter(sub => 
      sub.candidateId && String(sub.candidateId).trim().toUpperCase() === cleanId
    );
    return res.json(filtered);
  }
  res.json(db.submissions);
});

app.post('/api/students/:id/reset-attempt', (req, res) => {
  const studentId = req.params.id;
  db = readDB();
  const cleanId = String(studentId).trim().toUpperCase();

  // Clear from attempts registry
  Object.keys(db.attempts).forEach(key => {
    if (key.startsWith(`${cleanId}_`)) {
      delete db.attempts[key];
    }
  });

  // Clear from submissions log
  db.submissions = db.submissions.filter(sub => 
    !sub.candidateId || String(sub.candidateId).trim().toUpperCase() !== cleanId
  );

  saveDB(db);
  res.json({ success: true });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Paradigm Exam Fullstack Server & DB is LIVE!`);
  console.log(`🌐 Application URL: http://localhost:${PORT}`);
  console.log(`📁 Persistent Database: ${DB_FILE}`);
  console.log(`=======================================================`);
});
