/**
 * API Client Module - Paradigm Exam Frontend REST API Client
 * Connects browser to backend Express server & database at /api/...
 */

class ApiClient {
  constructor() {
    this.baseUrl = window.location.origin;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const defaultHeaders = { 'Content-Type': 'application/json' };
    
    const config = {
      ...options,
      headers: { ...defaultHeaders, ...options.headers }
    };

    try {
      const res = await fetch(url, config);
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || `HTTP error! status: ${res.status}`);
      }
      return data;
    } catch (err) {
      console.warn(`API Error [${endpoint}]:`, err.message);
      throw err;
    }
  }

  // Student Auth
  async loginStudent(id, password) {
    return await this.request('/api/auth/student', {
      method: 'POST',
      body: JSON.stringify({ id, password })
    });
  }

  // Admin Auth
  async loginAdmin(id, password) {
    return await this.request('/api/auth/admin', {
      method: 'POST',
      body: JSON.stringify({ id, password })
    });
  }

  // Quizzes CRUD
  async getQuizzes() {
    return await this.request('/api/quizzes');
  }

  async getQuizById(id) {
    return await this.request(`/api/quizzes/${id}`);
  }

  async saveQuiz(quiz) {
    return await this.request('/api/quizzes', {
      method: 'POST',
      body: JSON.stringify(quiz)
    });
  }

  async toggleActive(id) {
    return await this.request(`/api/quizzes/${id}/toggle-active`, {
      method: 'PATCH'
    });
  }

  async togglePublish(id) {
    return await this.request(`/api/quizzes/${id}/toggle-publish`, {
      method: 'PATCH'
    });
  }

  async deleteQuiz(id) {
    return await this.request(`/api/quizzes/${id}`, {
      method: 'DELETE'
    });
  }

  // Student Roster CRUD
  async getStudents() {
    return await this.request('/api/students');
  }

  async addStudent(student) {
    return await this.request('/api/students', {
      method: 'POST',
      body: JSON.stringify(student)
    });
  }

  async deleteStudent(id) {
    return await this.request(`/api/students/${encodeURIComponent(id)}`, {
      method: 'DELETE'
    });
  }

  // Attempts & Submissions
  async checkAttempt(studentId, quizId) {
    return await this.request(`/api/attempts/check?studentId=${encodeURIComponent(studentId)}&quizId=${encodeURIComponent(quizId)}`);
  }

  async submitExam(submission) {
    return await this.request('/api/submissions', {
      method: 'POST',
      body: JSON.stringify(submission)
    });
  }

  async getSubmissions(studentId = '') {
    const query = studentId ? `?studentId=${encodeURIComponent(studentId)}` : '';
    return await this.request(`/api/submissions${query}`);
  }

  async resetStudentAttempt(studentId) {
    return await this.request(`/api/students/${encodeURIComponent(studentId)}/reset-attempt`, {
      method: 'POST'
    });
  }
}

window.api = new ApiClient();
