import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import taskInterface from '../../@types/task';
import { Flex, Text } from '@radix-ui/themes';
import ClientTabDashboard from '../../components/componentsForHome/ClientTabDashboard/ClientTabDashboard';
import CreatorTabDashboard from '../../components/componentsForHome/CreatorTabDashboard/CreatorTabDashboard';
import './Home.css';

const exampleClientTasks: taskInterface[] = [
  {
    taskID: 1,
    Service: 'Service 1',
    ClientForeinKey: 1,
    requestField: 'requestField 1',
    status: 'accepted',
  },
  {
    taskID: 2,
    Service: 'Service 2',
    ClientForeinKey: 176840,
    requestField: 'requestField 2',
    status: 'rejected',
  },
  {
    taskID: 3,
    Service: 'Service 3',
    ClientForeinKey: 3434321,
    requestField: 'requestField 3',
    status: 'pending',
  },
  {
    taskID: 4,
    Service: 'Service 4',
    ClientForeinKey: 343242,
    requestField: 'requestField 4',
    status: 'done',
  },
  {
    taskID: 5,
    Service: 'Service 5',
    ClientForeinKey: 1432423,
    requestField: 'requestField 5',
    status: 'pending',
  },
];
const exampleCreatorTasks: taskInterface[] = [
  {
    taskID: 1,
    Service: 'Service 1',
    ClientForeinKey: 1,
    requestField: 'requestField 1',
    status: 'accepted',
  },
  {
    taskID: 2,
    Service: 'Service 2',
    ClientForeinKey: 176840,
    requestField: 'requestField 2',
    status: 'rejected',
  },
  {
    taskID: 3,
    Service: 'Service 3',
    ClientForeinKey: 3434321,
    requestField: 'requestField 3',
    status: 'pending',
  },
  {
    taskID: 4,
    Service: 'Service 4',
    ClientForeinKey: 343242,
    requestField: 'requestField 4',
    status: 'done',
  },
  {
    taskID: 5,
    Service: 'Service 5',
    ClientForeinKey: 1432423,
    requestField: 'requestField 5',
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
    <Flex
      direction="column"
      justify="center"
      align="center"
      gap="2"
    >
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
          <ClientTabDashboard tasks={tasksClient.filter(task => task)} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="creator">
          {/* //TODO: change filter to only pass in tasks from the user */}
          <CreatorTabDashboard tasks={tasksCreator.filter(task=> task)} />
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
