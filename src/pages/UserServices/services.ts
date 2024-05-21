import { Service } from '../../classes/service/service';

// Helper function to generate a random string
function getRandomString(length: number): string {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const services: Service[] = [
  // Service 1
  {
    name: getRandomString(10),
    description: 'Service Description',
    fields: [
      {
        prompt: 'Field Prompt',
        type: 'text',
      },
      {
        prompt: 'Field Prompt',
        type: 'radio',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
    ],
    tasks: [
      {
        taskID: 1,
        service: 'Service Name',
        client: 'Client',
        requestFields: [
          {
            prompt: 'Field Prompt',
            type: 'text',
            value: 'Field Value',
          },
          {
            prompt: 'Field Prompt',
            type: 'radio',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: Math.floor(Math.random() * 2),
          },
          {
            prompt: 'Field Prompt',
            type: 'checkbox',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: [Math.floor(Math.random() * 2)],
          },
        ],
        status: 'rejected',
      },
    ],
  },
  // Service 2
  {
    name: getRandomString(10),
    description: 'Service Description 2',
    fields: [
      {
        prompt: 'Field Prompt 2',
        type: 'text',
      },
      {
        prompt: 'Field Prompt 2',
        type: 'radio',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
      {
        prompt: 'Field Prompt 2',
        type: 'checkbox',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
    ],
    tasks: [
      {
        taskID: 1,
        service: 'Service Name 2',
        client: 'Client',
        requestFields: [
          {
            prompt: 'Field Prompt 2',
            type: 'text',
            value: 'Field Value',
          },
          {
            prompt: 'Field Prompt 2',
            type: 'radio',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: Math.floor(Math.random() * 2),
          },
          {
            prompt: 'Field Prompt 2',
            type: 'checkbox',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: [Math.floor(Math.random() * 2)],
          },
        ],
        status: 'accepted',
      },
    ],
  },
  // Service 3
  {
    name: getRandomString(10),
    description: 'Service Description 3',
    fields: [
      {
        prompt: 'Field Prompt 3',
        type: 'text',
      },
      {
        prompt: 'Field Prompt 3',
        type: 'radio',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
      {
        prompt: 'Field Prompt 3',
        type: 'checkbox',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
    ],
    tasks: [
      {
        taskID: 1,
        service: 'Service Name 3',
        client: 'Client',
        requestFields: [
          {
            prompt: 'Field Prompt 3',
            type: 'text',
            value: 'Field Value',
          },
          {
            prompt: 'Field Prompt 3',
            type: 'radio',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: Math.floor(Math.random() * 2),
          },
          {
            prompt: 'Field Prompt 3',
            type: 'checkbox',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: [Math.floor(Math.random() * 2)],
          },
        ],
        status: 'pending',
      },
    ],
  },
  // Service 4
  {
    name: getRandomString(10),
    description: 'Service Description 4',
    fields: [
      {
        prompt: 'Field Prompt 4',
        type: 'text',
      },
      {
        prompt: 'Field Prompt 4',
        type: 'radio',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
      {
        prompt: 'Field Prompt 4',
        type: 'checkbox',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
    ],
    tasks: [
      {
        taskID: 1,
        service: 'Service Name 4',
        client: 'Client',
        requestFields: [
          {
            prompt: 'Field Prompt 4',
            type: 'text',
            value: 'Field Value',
          },
          {
            prompt: 'Field Prompt 4',
            type: 'radio',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: Math.floor(Math.random() * 2),
          },
          {
            prompt: 'Field Prompt 4',
            type: 'checkbox',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: [Math.floor(Math.random() * 2)],
          },
        ],
        status: 'pending',
      },
    ],
  },
  // Service 5
  {
    name: getRandomString(10),
    description: 'Service Description 5',
    fields: [
      {
        prompt: 'Field Prompt 5',
        type: 'text',
      },
      {
        prompt: 'Field Prompt 5',
        type: 'radio',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
      {
        prompt: 'Field Prompt 5',
        type: 'checkbox',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
    ],
    tasks: [
      {
        taskID: 1,
        service: 'Service Name 5',
        client: 'Client',
        requestFields: [
          {
            prompt: 'Field Prompt 5',
            type: 'text',
            value: 'Field Value',
          },
          {
            prompt: 'Field Prompt 5',
            type: 'radio',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: Math.floor(Math.random() * 2),
          },
          {
            prompt: 'Field Prompt 5',
            type: 'checkbox',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: [Math.floor(Math.random() * 2)],
          },
        ],
        status: 'done',
      },
    ],
  },
  // Service 6
  {
    name: getRandomString(10),
    description: 'Service Description 6',
    fields: [
      {
        prompt: 'Field Prompt 6',
        type: 'text',
      },
      {
        prompt: 'Field Prompt 6',
        type: 'radio',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
      {
        prompt: 'Field Prompt 6',
        type: 'checkbox',
        choices: shuffleArray(['Choice 1', 'Choice 2']),
      },
    ],
    tasks: [
      {
        taskID: 1,
        service: 'Service Name 6',
        client: 'Client',
        requestFields: [
          {
            prompt: 'Field Prompt 6',
            type: 'text',
            value: 'Field Value',
          },
          {
            prompt: 'Field Prompt 6',
            type: 'radio',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: Math.floor(Math.random() * 2),
          },
          {
            prompt: 'Field Prompt 6',
            type: 'checkbox',
            choices: shuffleArray(['Choice 1', 'Choice 2']),
            selection: [Math.floor(Math.random() * 2)],
          },
        ],
        status: 'inProgress',
      },
    ],
  },
];

export default services;
