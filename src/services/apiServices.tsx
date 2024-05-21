import { ServiceField } from '../classes/service/formField';
import { Service, Task, TaskStatus, loadService } from '../classes/service/service';
import { api } from './api';

export async function loginUser(payload: { username: string; password: string }) {
  const { data } = await api.post('/api/auth/login/', payload)
  return data
}

export async function registerUser(payload: {
  username: string;
  email: string;
  password: string;
}) {
  const { data } = await api.post('/api/auth/register/', payload)
  return data
}

export async function createService(service: Service) {
  return await api.post('/api/services/', service);
}

export async function createTask(serviceID: number, task: Task) {
  return await api.post(`/api/services/${serviceID}/task`, task);
}

export async function getUserServices(userID: number) {
  const { data } = await api.get(`/api/users/${userID}/services/`);
  return data.map(loadService)
}

export async function getUserOutboundTasks(username: string) {
  return await api.get(`/api/${username}/tasks/`);
}

export async function updateTaskStatus(taskID: number, status: TaskStatus) {
  return await api.post(`/api/tasks/${taskID}`, { status })
}

export async function deleteTask(taskID: number) {
  return await api.delete(`/api/tasks/${taskID}`)
}

export async function deleteService(serviceID: number) {
  return await api.delete(`/api/services/${serviceID}`)
}

export async function getUserInfo(username: string) {
  return await api.get(`/users/${username}`)
}
