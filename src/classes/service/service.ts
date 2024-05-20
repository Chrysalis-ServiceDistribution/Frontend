import { ServiceField } from './formField';

export type TaskStatus = 'pending' | 'accepted' | 'inProgress' | 'rejected' | 'done';

export type RequestTextField = {
  type: 'text';
  value: string;
};

export type RequestRadioField = {
  type: 'radio';
  selection: number;
};

export type RequestCheckboxField = {
  type: 'checkbox';
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
        type: 'text',
        value: '',
      };
    case 'radio':
      return {
        type: 'radio',
        selection: 0,
      };
    case 'checkbox':
      return {
        type: 'checkbox',
        selection: [],
      };
  }
}
