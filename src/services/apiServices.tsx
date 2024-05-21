import {
  ServiceCreationFormData,
  ServiceField,
} from '../classes/service/formField';
import {
  Service,
  Task,
  TaskStatus,
  loadService,
} from '../classes/service/service';
import { api } from './api';

export async function loginUser(payload: {
  username: string;
  password: string;
}) {
  const { data } = await api.post('/api/auth/login/', payload);
  return data;
}

export async function registerUser(payload: {
  username: string;
  email: string;
  password: string;
}) {
  const { data } = await api.post('/api/auth/register/', payload);
  return data;
}

export async function createService(service: ServiceCreationFormData) {
  const fields = service.fields.map((field, idx) => {
    switch (field.type) {
      case 'text':
        return {
          type: 'text',
          prompt: field.prompt,
          index: idx,
          choices: null,
        };
      case 'radio':
        return {
          type: 'radio',
          prompt: field.prompt,
          index: idx,
          choices: field.choices,
        };
      case 'checkbox':
        return {
          type: 'checkbox',
          prompt: field.prompt,
          index: idx,
          choices: field.choices,
        };
    }
  });
  return await api.post('/api/services/', {
    name: service.name,
    description: service.description,
    fields,
  });
}

export async function createTask(serviceID: number, task: Task) {
  return await api.post(`/api/services/${serviceID}/task`, task);
}

export async function getUserServices(userID: number) {
  const { data } = await api.get(`/api/users/${userID}/services/`);
  return data.map(loadService);
}

export async function getUserServiceById(servID: number) {
  const { data } = await api.get(`/api/services/${servID}/`);
  return loadService(data);
}

export async function getUserOutboundTasks(username: string) {
  return await api.get(`/api/${username}/tasks/`);
}

export async function updateTaskStatus(taskID: number, status: TaskStatus) {
  let formattedStatus: string;
  switch (status) {
    case 'pending':
      formattedStatus = 'P';
      break;
    case 'accepted':
      formattedStatus = 'A';
      break;
    case 'inProgress':
      formattedStatus = 'IP';
      break;
    case 'rejected':
      formattedStatus = 'X';
      break;
    case 'done':
      formattedStatus = 'C';
      break;
  }

  return await api.post(`/api/tasks/${taskID}`, { status: formattedStatus });
}

export async function deleteTask(taskID: number) {
  return await api.delete(`/api/tasks/${taskID}`);
}

export async function deleteService(serviceID: number) {
  return await api.delete(`/api/services/${serviceID}`);
}

export async function getUserInfo(username: string) {
  return await api.get(`/users/${username}`);
}
