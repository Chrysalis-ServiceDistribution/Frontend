import { api } from './api'

export async function login(payload: {
  username: string,
  password: string,
}) {
  return await api.post('/auth/login', payload)
}

export async function register(payload: {
  username: string,
  email: string,
  password: string,
}) {
  return await api.post('/auth/register', payload)
}
