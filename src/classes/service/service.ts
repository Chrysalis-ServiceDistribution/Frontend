import { ServiceField } from './formField';

export type TaskStatus =
  | 'pending'
  | 'accepted'
  | 'inProgress'
  | 'rejected'
  | 'done';

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
  client: string;
  status: TaskStatus;
  requestFields: RequestField[];
}

export interface Service {
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
    name: service.name,
    description: service.description,
    fields: service['form_fields'].map(loadServiceField),
    tasks: service['tasks'].map(loadTask),
  }
}

export function loadServiceField(field: any): ServiceField {
}

export function loadRequestField(field: any): RequestField {
}

export function loadTask(task: any): Task {
}
