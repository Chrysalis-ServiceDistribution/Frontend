import { ServiceField } from './formField';

export type TaskStatus =
  | 'pending'
  | 'accepted'
  | 'inProgress'
  | 'rejected'
  | 'done';

export const TaskStatuses = [
  'rejected' as const,
  'pending' as const,
  'accepted' as const,
  'inProgress' as const,
  'done' as const,
];

export type RequestTextField = {
  type: 'text';
  prompt: string;
  value: string;
};

export type RequestRadioField = {
  type: 'radio';
  prompt: string;
  choices: string[];
  selection: number;
};

export type RequestCheckboxField = {
  type: 'checkbox';
  prompt: string;
  choices: string[];
  selection: number[];
};

export type RequestField =
  | RequestRadioField
  | RequestCheckboxField
  | RequestTextField;

export interface Task {
  taskID: number;
  serviceID: number;
  client: string;
  requestFields: RequestField[];
  status: TaskStatus;
}

export interface Service {
  id: number;
  user: {
    id: number;
    username: string;
  };
  name: string;
  description: string;
  fields: ServiceField[];
  tasks: Task[];
}

export function createDefaultField(formField: ServiceField): RequestField {
  switch (formField.type) {
    case 'text':
      return {
        ...formField,
        value: '',
      };
    case 'radio':
      return {
        ...formField,
        selection: 0,
      };
    case 'checkbox':
      return {
        ...formField,
        selection: [],
      };
  }
}

export function loadService(service: any): Service {
  return {
    id: service.id,
    user: {id: service.user.id, username: service.user.username},
    name: service.name,
    description: service.description,
    fields: service['form_fields'].map(loadServiceField),
    tasks: service['tasks']?.map(loadTask) || [],
  };
}

export function loadServiceField(field: any): ServiceField {
  switch (field.type) {
    case 'text':
      return {
        type: 'text',
        prompt: field.prompt,
      };
    case 'radio':
      return {
        type: 'radio',
        prompt: field.prompt,
        choices: field.choices,
      };
    case 'checkbox':
      return {
        type: 'checkbox',
        prompt: field.prompt,
        choices: field.choices,
      };
    default:
      throw new Error('invalid type');
  }
}

export function loadRequestField(field: any): RequestField {
  switch (field.type) {
    case 'text':
      return {
        type: 'text',
        prompt: field.prompt,
        value: field.value,
      };
    case 'radio':
      return {
        type: 'radio',
        prompt: field.prompt,
        choices: field.choices,
        selection: field.options,
      };
    case 'checkbox':
      return {
        type: 'checkbox',
        prompt: field.prompt,
        choices: field.choices,
        selection: field.options,
      };
    default:
      throw new Error('invalid type');
  }
}

export function loadStatus(status: any): TaskStatus {
  switch (status) {
    case 'P':
      return 'pending';
    case 'A':
      return 'accepted';
    case 'IP':
      return 'inProgress';
    case 'C':
      return 'done';
    case 'X':
      return 'rejected';
    default:
      throw new Error('invalid status');
  }
}

export function loadTask(task: any): Task {
  return {
    taskID: task.id,
    serviceID: task.service,
    client: task.client,
    status: loadStatus(task.status),
    requestFields: task['request_fields'].map(loadRequestField),
  };
}
