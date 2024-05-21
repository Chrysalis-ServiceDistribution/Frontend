import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import {Task as taskInterface} from '../../classes/service/service';
import { Flex, Text } from '@radix-ui/themes';
import ClientTabDashboard from '../../components/ClientTabDashboard/ClientTabDashboard';
import CreatorTabDashboard from '../../components/CreatorTabDashboard/CreatorTabDashboard';
import './Home.css';

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
];

export default function Home() {
  const [tasksClient, setTasks] = React.useState<taskInterface[]>([]);
  const [tasksCreator, setTasksCreator] = React.useState<taskInterface[]>([]);

  React.useEffect(() => {
    //TODO: fetch tasks from the server
    setTasks(exampleClientTasks);
    setTasksCreator(exampleCreatorTasks);
  }, []);

  return (
    <Flex direction="column" justify="center" align="center" gap="2">
      <Text size="8"> Welcome </Text>
      <Tabs.Root className="TabsRoot" defaultValue="client">
        <Tabs.List className="TabsList" aria-label="Tabs">
          {/* //TODO?: Add logic to hide? tabs when the user doesn't have any relevant tasks */}
          <Tabs.Trigger className="TabsTrigger" value="client">
            Client
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="creator">
            Creator
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content className="TabsContent" value="client">
          {/* //TODO: change filter to only pass in tasks by the user */}
          <ClientTabDashboard tasks={tasksClient.filter((task) => task)} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="creator">
          {/* //TODO: change filter to only pass in tasks from the user */}
          <CreatorTabDashboard tasks={tasksCreator.filter((task) => task)} />
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
