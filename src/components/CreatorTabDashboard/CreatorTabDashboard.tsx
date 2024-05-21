import React, { useEffect } from 'react';
import { Task as taskInterface } from '../../classes/service/service';
import ServiceSelect from '../ServiceSelect/ServiceSelect';
import Task from '../Task/Task';
import { Flex, Text, Button, IconButton, Link, Card } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';
import { EyeOpenIcon } from '@radix-ui/react-icons';

const CreatorTabDashboard = (props: { tasks: taskInterface[] }) => {
  const { tasks } = props;

  const [services, setServices] = React.useState<string[]>([]);
  const [serviceView, setServiceView] = React.useState<string>('Show All');

  useEffect(() => {
    //TODO: Change this to get the services from the user context
    setServices([...new Set(tasks.map((task) => task.service))]);
  }, [tasks]);

  return (
    <Flex direction="column" gap="2">
      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
      <ServiceSelect services={services} setServiceView={setServiceView} />
      {tasks?.filter(
        (task) => task.status === 'pending' || task.status === 'rejected',
      ).length > 0 && (
        <Collapsible.Root>
          <Flex direction="column" justify="center" gap="2">
            <Card>
              <Flex justify="between">
                <Text> Pending Tasks </Text>
                <Collapsible.Trigger asChild>
                  <IconButton><EyeOpenIcon /></IconButton>
                </Collapsible.Trigger>
              </Flex>
            </Card>
            <Collapsible.Content>
              {
                <Flex direction="column" gap="1">
                  {
                    // pending and rejected tasks
                    tasks
                      .filter((task) =>
                        serviceView !== 'Show All'
                          ? task.service === serviceView
                          : task,
                      )
                      .filter(
                        (task) =>
                          task.status === 'pending' ||
                          task.status === 'rejected',
                      )
                      .map((task) => {
                        return <Task key={task.taskID} {...task} />;
                      })
                  }
                </Flex>
              }
            </Collapsible.Content>
          </Flex>
        </Collapsible.Root>
      )}
      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
      {tasks.filter(
        (task) => task.status !== 'pending' && task.status !== 'rejected',
      ).length > 0 && (
        <Collapsible.Root>
          <Flex direction="column" justify="center" gap="2">
            <Card>
              <Flex justify="between">
                <Text> Accepted Tasks </Text>
                <Collapsible.Trigger asChild>
                  <IconButton><EyeOpenIcon /></IconButton>
                </Collapsible.Trigger>
              </Flex>
            </Card>
            <Collapsible.Content>
              {
                <Flex direction="column" gap="1">
                  {
                    // other tasks
                    <Flex direction="column" gap="1">
                      {tasks
                        .filter((task) =>
                          serviceView !== 'Show All'
                            ? task.service === serviceView
                            : task,
                        )
                        .filter(
                          (task) =>
                            task.status !== 'pending' &&
                            task.status !== 'rejected',
                        )
                        .map((task) => {
                          return <Task key={task.taskID} {...task} />;
                        })}
                    </Flex>
                  }
                </Flex>
              }
            </Collapsible.Content>
          </Flex>
        </Collapsible.Root>
      )}
      <Link href="/:userID/services">
        <Button>View your services</Button>
      </Link>
    </Flex>
  );
};

export default CreatorTabDashboard;
