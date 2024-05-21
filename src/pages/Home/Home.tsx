import React from 'react';
import { Task as taskInterface } from '../../classes/service/service';
import { Flex, Text, Tabs as Tabs } from '@radix-ui/themes';
import ClientTabDashboard from '../../components/ClientTabDashboard/ClientTabDashboard';
import CreatorTabDashboard from '../../components/CreatorTabDashboard/CreatorTabDashboard';

const exampleClientTasks: taskInterface[] = [
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'pending',
  },
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'accepted',
  },
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'rejected',
  },
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'inProgress',
  },
];
const exampleCreatorTasks: taskInterface[] = [
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'pending',
  },
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'accepted',
  },
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'rejected',
  },
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
        choices: ['Choice 1', 'Choice 2'],
        selection: 0,
      },
      {
        prompt: 'Field Prompt',
        type: 'checkbox',
        choices: ['Choice 1', 'Choice 2'],
        selection: [0],
      },
    ],
    status: 'inProgress',
  },
];

export default function Home() {
  //TODO: get the username from the server
  const username = 'User';
  const [tasksClient, setTasks] = React.useState<taskInterface[]>([]);
  const [tasksCreator, setTasksCreator] = React.useState<taskInterface[]>([]);

  React.useEffect(() => {
    //TODO: fetch tasks from the server
    setTasks(exampleClientTasks);
    setTasksCreator(exampleCreatorTasks);
  }, []);

  return (
      <Flex direction="column" justify="center" align="stretch" gap="2">
        <Text align='center' size="8"> Welcome, {username}! </Text>
        <Tabs.Root defaultValue="client">
          <Flex  direction='column' justify='center' gap='3'>
          <Tabs.List justify='center'>
            {/* //TODO?: Add logic to hide? tabs when the user doesn't have any relevant tasks */}
            <Tabs.Trigger value="client"><Text size='5'>Client</Text></Tabs.Trigger>
            <Tabs.Trigger value="creator"><Text size='5'>Creator</Text></Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="client">
            {/* //TODO: change filter to only pass in tasks by the user */}
            <ClientTabDashboard tasks={tasksClient.filter((task) => task)} />
          </Tabs.Content>
          <Tabs.Content value="creator">
            {/* //TODO: change filter to only pass in tasks from the user */}
            <CreatorTabDashboard tasks={tasksCreator.filter((task) => task)} />
          </Tabs.Content>
          </Flex>
        </Tabs.Root>
      </Flex>
  );
}
