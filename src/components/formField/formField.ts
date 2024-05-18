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
