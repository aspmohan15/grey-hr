import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001' })

export const signIn = (formData) => API.post('/api/users/signin', formData);

export const signUp = (formData) => API.post('/api/users/signup', formData);

export const register = (formData) => API.post('/api/users/register', formData);

// export const googleSignIn = (formData) => API.post('/api/users/googlesignin', formData);
export const getMe = (token) => API.get('/api/users/me', { headers: { "Authorization": `Bearer ${token}` } });

