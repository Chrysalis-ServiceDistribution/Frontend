export const formFieldTypes = ['text', 'radio', 'checkbox'];

export class ServiceTextField {
  type = 'text' as const;
  prompt: string;

  constructor(prompt: string) {
    this.prompt = prompt;
  }
}

export class ServiceRadioField {
  type = 'radio' as const;
  prompt: string;
  choices: string[];

  constructor(prompt: string, choices: string[]) {
    this.prompt = prompt;
    this.choices = choices;
  }
}

export class ServiceCheckboxField {
  type = 'checkbox' as const;
  prompt: string;
  choices: string[];

  constructor(prompt: string, choices: string[]) {
    this.prompt = prompt;
    this.choices = choices;
  }
}

export type ServiceField = ServiceTextField | ServiceRadioField | ServiceCheckboxField;

export type ServiceForm = {
  name: string;
  description: string;
  fields: ServiceField[];
};

/**
 * Removes all leading and trailing whitespace from all form fields.
 *
 * @param {ServiceForm} form - A service form.
 * @returns {ServiceForm} A service form with all of its fields
 * trimmed of leading and trailing whitespace.
 */
export function sanitize(form: ServiceForm): ServiceForm {
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

/**
 * Returns all formatting errors inside of a service form: empty fields,
 *
 *
 * @param {ServiceForm} form - A service form.
 * @returns {string[]} A string of errors found inside the form.
 */
export function validate(form: ServiceForm): string[] {
  const errors: string[] = [];

  if (form.name === '') {
    errors.push('Name field cannot be empty');
  }

  if (form.description === '') {
    errors.push('Description field cannot be empty');
  }

  if (form.fields.length === 0) {
    errors.push('Service form must have at least one field');
  }

  for (const field of form.fields) {
    if (field.prompt === '') {
      errors.push('Prompt name cannot be empty');
    }

    if (field.type === 'radio' || field.type === 'checkbox') {
      let emptyFields = 0;
      for (const choice of field.choices) {
        if (choice === '') {
          emptyFields += 1;
        }
      }

      if (emptyFields > 0) {
        errors.push('Field has empty choices');
      }
    }
  }

  return errors;
}
