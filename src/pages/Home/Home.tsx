import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import taskInterface from '../../@types/task';
import { Flex, Text } from '@radix-ui/themes';
import ClientTabDashboard from '../../componentsForHome/ClientTabDashboard/ClientTabDashboard';
import CreatorTabDashboard from '../../componentsForHome/CreatorTabDashboard/CreatorTabDashboard';
import './Home.css';

export default function Home() {
  const [tasks, setTasks] = React.useState<taskInterface[]>([]);

  React.useEffect(() => {
    setTasks([]);
  }, [tasks]);

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
          <ClientTabDashboard tasks={tasks} />
        </Tabs.Content>
        <Tabs.Content className="TabsContent" value="creator">
          <CreatorTabDashboard tasks={tasks} />
        </Tabs.Content>
      </Tabs.Root>
    </Flex>
  );
}
