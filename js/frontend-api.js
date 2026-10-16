// BookVerse API integration starter
// Copy into the frontend's js folder and gradually replace localStorage-based operations.

const API_URL = 'http://localhost:5000/api';

async function api(path, options = {}) {
  const token = localStorage.getItem('bv_token');
  const response = await fetch(API_URL + path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    let message = 'Request failed';
    try { message = (await response.json()).message || message; } catch {}
    throw new Error(message);
  }
  return response.status === 204 ? null : response.json();
}

async function backendLogin(email, password) {
  const result = await api('/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  localStorage.setItem('bv_token', result.token);
  localStorage.setItem('bv_user', JSON.stringify(result.user));
  return result;
}

async function backendRegister(name, email, password) {
  const result = await api('/auth/register', {
    method: 'POST',
    body: JSON.stringify({ name, email, password })
  });
  localStorage.setItem('bv_token', result.token);
  localStorage.setItem('bv_user', JSON.stringify(result.user));
  return result;
}

async function loadBooksFromBackend(search = '', category = '') {
  const params = new URLSearchParams();
  if (search) params.set('search', search);
  if (category) params.set('category', category);
  return api('/books?' + params.toString());
}
