export class TextField {
  type: 'text' = 'text';
  prompt: string;

  constructor(prompt: string) {
    this.prompt = prompt;
  }
}

export class RadioField {
  type: 'radio' = 'radio';
  prompt: string;
  choices: string[];

  constructor(prompt: string, choices: string[]) {
    this.prompt = prompt;
    this.choices = choices;
  }
}

export class CheckboxField {
  type: 'checkbox' = 'checkbox';
  prompt: string;
  choices: string[];

  constructor(prompt: string, choices: string[]) {
    this.prompt = prompt;
    this.choices = choices;
  }
}

export type FormFieldType = TextField | RadioField | CheckboxField;
