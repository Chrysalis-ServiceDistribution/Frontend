import React, { useContext } from 'react';
import { Task as taskInterface } from '../../classes/service/service';
import { Flex, Text, Tabs as Tabs } from '@radix-ui/themes';
import ClientTabDashboard from '../../components/ClientTabDashboard/ClientTabDashboard';
import CreatorTabDashboard from '../../components/CreatorTabDashboard/CreatorTabDashboard';
import { AuthContext } from '../../contexts/AuthContext';
import { getUserInfo } from '../../services/apiServices';

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
  const context = useContext(AuthContext);
  const [tasksClient, setTasks] = React.useState<taskInterface[]>([]);
  const [tasksCreator, setTasksCreator] = React.useState<taskInterface[]>([]);

  React.useEffect(() => {
    const runner = async () => {
      if (context === null) { return }
      const { loggedInUserID } = context;
      if (loggedInUserID === null) { return }
      const data = await getUserInfo(loggedInUserID);

      setTasks(data.tasks);
      setTasksCreator(data.services.flatMap(s => s.tasks));
    }
    runner()
  }, [context]);

  return (
    <Flex direction="column" justify="center" align="center" gap="2">
      <Text size="8"> Welcome </Text>
      <Tabs.Root defaultValue="client">
        <Tabs.List>
          {/* //TODO?: Add logic to hide? tabs when the user doesn't have any relevant tasks */}
          <Tabs.Trigger value="client">Client</Tabs.Trigger>
          <Tabs.Trigger value="creator">Creator</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="client">
          {/* //TODO: change filter to only pass in tasks by the user */}
          <ClientTabDashboard tasks={tasksClient.filter((task) => task)} />
        </Tabs.Content>
        <Tabs.Content value="creator">
          {/* //TODO: change filter to only pass in tasks from the user */}
          <CreatorTabDashboard tasks={tasksCreator.filter((task) => task)} />
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
