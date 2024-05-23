import {
  ServiceCreationFormData,
  ServiceField,
} from '../classes/service/formField';
import {
  RequestField,
  Service,
  Task,
  TaskStatus,
  loadService,
  loadTask,
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
  const { data } = await api.post('/api/auth/register/', {
    ...payload,
    profile: {
      bio: 'User bio goes here.'
    }
  });
  return data;
}

export async function verifyUser() {
  const { data } = await api.get('/api/auth/verify/');
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
    form_fields: fields,
  });
}

export async function createTask(serviceID: number, fields: RequestField[]) {
  const newFields = fields.map((field, idx) => {
    switch (field.type) {
      case 'text':
        return {
          type: 'text',
          index: idx,
          value: field.value,
          options: null,
        };
      case 'radio':
        return {
          type: 'radio',
          index: idx,
          value: '',
          options: field.selection,
        };
      case 'checkbox':
        return {
          type: 'checkbox',
          index: idx,
          value: '',
          options: field.selection,
        };
    }
  });

  return await api.post(`/api/services/${serviceID}/submit_request/`, {
    fields: newFields,
  });
}

export async function getAllServices() {
  const { data } = await api.get(`/api/services/`);
  return data.map(loadService);
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

  return await api.put(`/api/tasks/${taskID}/update_status/`, { status: formattedStatus });
}

export async function deleteTask(taskID: number) {
  return await api.delete(`/api/tasks/${taskID}/`);
}

export async function deleteService(serviceID: number) {
  return await api.delete(`/api/services/${serviceID}/`);
}

export async function getUserInfo(userID: number): Promise<{
  userID: number;
  user: string;
  profile: Record<string, string>;
  services: Service[];
  tasks: Task[];
}> {
  const { data } = await api.get(`/api/users/${userID}/details/`);
  return {
    userID: data.user.id,
    user: data.user.username,
    profile: data.user.profile,
    services: data.services?.map(loadService) || [],
    tasks: data.tasks?.map(loadTask) || [],
  };
}
