const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'data', 'db.json');
const dbData = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

const PROJECT_ID = 'paradigm-exam';
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

function toFirestoreValue(val) {
  if (val === null || val === undefined) return { nullValue: null };
  if (typeof val === 'boolean') return { booleanValue: val };
  if (typeof val === 'number') {
    if (Number.isInteger(val)) return { integerValue: String(val) };
    return { doubleValue: val };
  }
  if (typeof val === 'string') return { stringValue: val };
  if (Array.isArray(val)) {
    return { arrayValue: { values: val.map(toFirestoreValue) } };
  }
  if (typeof val === 'object') {
    const fields = {};
    for (const [k, v] of Object.entries(val)) {
      fields[k] = toFirestoreValue(v);
    }
    return { mapValue: { fields } };
  }
  return { stringValue: String(val) };
}

async function uploadDoc(collection, docId, obj) {
  const fields = {};
  for (const [k, v] of Object.entries(obj)) {
    fields[k] = toFirestoreValue(v);
  }
  const url = `${BASE_URL}/${collection}/${docId}?key=AIzaSyDeW2w-xOYLCXVlMYeARvKbjkWHDdxFEXM`;
  try {
    const res = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields })
    });
    const data = await res.json();
    if (res.ok) {
      console.log(`✅ Uploaded ${collection}/${docId}`);
    } else {
      console.error(`❌ Failed ${collection}/${docId}:`, data.error ? data.error.message : data);
    }
  } catch (err) {
    console.error(`❌ Error uploading ${collection}/${docId}:`, err.message);
  }
}

async function seed() {
  console.log("🔥 Seeding Firebase Firestore database...");
  
  // Quizzes
  if (dbData.quizzes) {
    for (const q of dbData.quizzes) {
      await uploadDoc('quizzes', q.id, q);
    }
  }

  // Students
  if (dbData.students) {
    for (const s of dbData.students) {
      const normId = (s.id || '').toUpperCase();
      await uploadDoc('students', normId, { ...s, id: normId });
    }
  }

  console.log("✨ Firebase Firestore seeding finished!");
}

seed();
