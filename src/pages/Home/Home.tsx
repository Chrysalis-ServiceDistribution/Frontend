import React, { useContext } from 'react';
import { Task as taskInterface } from '../../classes/service/service';
import { Flex, Text, Tabs as Tabs } from '@radix-ui/themes';
import ClientTabDashboard from '../../components/ClientTabDashboard/ClientTabDashboard';
import CreatorTabDashboard from '../../components/CreatorTabDashboard/CreatorTabDashboard';
import { AuthContext } from '../../contexts/AuthContext';
import { getUserInfo } from '../../services/apiServices';
import { useNavigate } from 'react-router';

export default function Home() {
  //TODO: get the username from the server
  const username = 'User';
  const context = useContext(AuthContext);
  const [tasksClient, setTasks] = React.useState<taskInterface[]>([]);
  const [tasksCreator, setTasksCreator] = React.useState<taskInterface[]>([]);
  const navigate = useNavigate()

  React.useEffect(() => {
    const runner = async () => {
      if (context === null) { return }
      const { loggedInUserID } = context;
      if (loggedInUserID === null) { return navigate('/auth'); }
      const data = await getUserInfo(loggedInUserID);

      setTasks(data.tasks);
      setTasksCreator(data.services.flatMap(s => s.tasks));
    }
    runner()
  }, [context, navigate]);

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
            <ClientTabDashboard tasks={tasksClient.filter((task) => task)} />
          </Tabs.Content>
          <Tabs.Content value="creator">
            <CreatorTabDashboard tasks={tasksCreator.filter((task) => task)} />
          </Tabs.Content>
          </Flex>
        </Tabs.Root>
      </Flex>
  );
}
