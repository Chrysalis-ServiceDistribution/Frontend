import { api } from './api';

export async function loginUser(payload: { username: string; password: string }) {
  return await api.post('/auth/login', payload);
}

export async function registerUser(payload: {
  username: string;
  email: string;
  password: string;
}) {
  return await api.post('/auth/register', payload);
}
