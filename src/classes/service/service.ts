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
  service: string;
  client: string;
  requestFields: RequestField[];
  status: TaskStatus;
}

/**
 * A service is a collection of tasks that can be requested by clients.
 * Each service has a name, description, fields, and tasks.
 * Task's have the following properties:
 * - taskID: a unique identifier for the task
 * - service: the name of the service
 * - client: the name of the client
 * - requestFields: an array of fields that the client must fill out to request the service
 * -- each field has a prompt and a value
 * - status: the status of the task (pending, accepted, inProgress, rejected, done)
 * Services have the following properties:
 * - name: the name of the service
 * - description: a description of the service
 * - fields: an array of fields that the client must fill out to request the service
 * -- each field has a prompt and a type (text, radio, checkbox)
 * - tasks: an array of tasks that have been requested for the service
 * -- each task has a taskID, service, client, requestFields, and status
 * @param name the name of the service
 * @param description a description of the service
 * @param fields an array of fields that the client must fill out to request the service
 * @param tasks an array of tasks that have been requested for the service
 * @returns a service object
 * @example
 * const service: Service = {
 *  name: 'Service Name',
 * description: 'Service Description',
 * fields: [
 * {
 * prompt: 'Field Prompt',
 * type: 'text',
 * },
 * {
 * prompt: 'Field Prompt',
 * type: 'radio',
 * choices: ['Choice 1', 'Choice 2'],
 * },
 * {
 * prompt: 'Field Prompt',
 * type: 'checkbox',
 * choices: ['Choice 1', 'Choice 2'],
 * },
 * ],
 * tasks: [
 * {
 * taskID: 1,
 * service: 'Service Name',
 * client: 'Client
 * requestFields: [
 * {
 * prompt: 'Field Prompt',
 * type: 'text',
 * value: 'Field Value',
 * },
 * {
 * prompt: 'Field Prompt',
 * type: 'radio',
 * choices: ['Choice 1', 'Choice 2'],
 * selection: 0,
 * },
 * {
 * prompt: 'Field Prompt',
 * type: 'checkbox',
 * choices: ['Choice 1', 'Choice 2'],
 * selection: [0],
 * },
 * ],
 * status: 'pending',
 * },
 * ],
 * };
 *
 */
export interface Service {
  id: number,
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
    service: task.service,
    client: task.client,
    status: loadStatus(task.status),
    requestFields: task['request_fields'].map(loadRequestField),
  };
}
