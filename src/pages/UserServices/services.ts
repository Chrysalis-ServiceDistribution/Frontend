import { Service } from '../../classes/service/service';

const services: Service[] = [
  {
    name: 'Service 1',
    description: 'Service Description',
    fields: [
      {
        type: 'text',
        prompt: 'Text Prompt',
      },
      {
        type: 'radio',
        prompt: 'Radio Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
      {
        type: 'checkbox',
        prompt: 'Checkbox Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
    ],
    tasks: [
      {
        client: 'Client 1',
        status: 'pending',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 2',
        status: 'inProgress',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 3',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 4',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 5',
        status: 'done',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
    ],
  },
  {
    name: 'Service 1',
    description: 'Service Description',
    fields: [
      {
        type: 'text',
        prompt: 'Text Prompt',
      },
      {
        type: 'radio',
        prompt: 'Radio Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
      {
        type: 'checkbox',
        prompt: 'Checkbox Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
    ],
    tasks: [
      {
        client: 'Client 1',
        status: 'pending',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 2',
        status: 'inProgress',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 3',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 4',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 5',
        status: 'done',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
    ],
  },
  {
    name: 'Service 1',
    description: 'Service Description',
    fields: [
      {
        type: 'text',
        prompt: 'Text Prompt',
      },
      {
        type: 'radio',
        prompt: 'Radio Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
      {
        type: 'checkbox',
        prompt: 'Checkbox Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
    ],
    tasks: [
      {
        client: 'Client 1',
        status: 'pending',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 2',
        status: 'inProgress',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 3',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 4',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 5',
        status: 'done',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
    ],
  },
  {
    name: 'Service 1',
    description: 'Service Description',
    fields: [
      {
        type: 'text',
        prompt: 'Text Prompt',
      },
      {
        type: 'radio',
        prompt: 'Radio Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
      {
        type: 'checkbox',
        prompt: 'Checkbox Prompt',
        choices: ['Choice 1', 'Choice 2', 'Choice 3'],
      },
    ],
    tasks: [
      {
        client: 'Client 1',
        status: 'pending',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 2',
        status: 'inProgress',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 3',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 4',
        status: 'accepted',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
      {
        client: 'Client 5',
        status: 'done',
        requestFields: [
          {
            type: 'text',
            value: 'Text Value',
          },
          {
            type: 'radio',
            selection: 0,
          },
          {
            type: 'checkbox',
            selection: [0, 1],
          },
        ],
      },
    ],
  },
];

export default services;
