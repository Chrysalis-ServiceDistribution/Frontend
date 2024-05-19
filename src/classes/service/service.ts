import { FormFieldType } from './formField';

export type FilledTextField = {
  type: 'text';
  value: string;
};

export type FilledRadioField = {
  type: 'radio';
  selection: number;
};

export type FilledCheckboxField = {
  type: 'checkbox';
  selection: number[];
};

export type RequestField =
  | FilledRadioField
  | FilledCheckboxField
  | FilledTextField;

export interface Task {
  client: string;
  status: string;
  requestFields: RequestField[];
}

export interface Service {
  name: string;
  description: string;
  fields: FormFieldType[];
  tasks: Task[];
}
