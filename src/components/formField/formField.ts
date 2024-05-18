export const formFieldTypes = ['text', 'radio', 'checkbox'];

export class TextField {
  type = 'text' as const;
  prompt: string;

  constructor(prompt: string) {
    this.prompt = prompt;
  }
}

export class RadioField {
  type = 'radio' as const;
  prompt: string;
  choices: string[];

  constructor(prompt: string, choices: string[]) {
    this.prompt = prompt;
    this.choices = choices;
  }
}

export class CheckboxField {
  type = 'checkbox' as const;
  prompt: string;
  choices: string[];

  constructor(prompt: string, choices: string[]) {
    this.prompt = prompt;
    this.choices = choices;
  }
}

export type FormFieldType = TextField | RadioField | CheckboxField;

export type CreateServiceFormData = {
  name: string;
  description: string;
  fields: FormFieldType[];
};

export function sanitize(form: CreateServiceFormData): CreateServiceFormData {
  return {
    name: form.name.trim(),
    description: form.description.trim(),
    fields: form.fields.map((field) => {
      switch (field.type) {
        case 'text':
          return {
            type: 'text',
            prompt: field.prompt.trim(),
          };
        case 'radio':
          return {
            type: 'radio',
            prompt: field.prompt.trim(),
            choices: field.choices.map((choice) => choice.trim()),
          };
        case 'checkbox':
          return {
            type: 'checkbox',
            prompt: field.prompt.trim(),
            choices: field.choices.map((choice) => choice.trim()),
          };
      }
    }),
  };
}
