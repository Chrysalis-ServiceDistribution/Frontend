import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import DashboardProps from '../../../@types/dashboard';
import ServiceSelect from '../ServiceSelect/ServiceSelect';
import Task from '../Task/Task';
import { Flex, Text, Button, Box } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';

const CreatorTabDashboard: React.FC<DashboardProps> = ({ tasks }) => {
  const navigate = useNavigate();

  const [services, setServices] = React.useState<string[]>([]);
  const [serviceView, setServiceView] = React.useState<string>('Show All');

  useEffect(() => {
    //TODO: Change this to get the services from the user context
    setServices([...new Set(tasks.map((task) => task.Service))]);
  }, [tasks]);

  return (
    <Flex direction="column" gap="2">
      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
      <Text size="5">Your reqests and task status'</Text>
      <Button
        onClick={() => {
          navigate('/:userID/services');
        }}
      >
        View your services
      </Button>
      <ServiceSelect services={services} setServiceView={setServiceView} />
      {tasks?.filter(
        (task) => task.status === 'pending' || task.status === 'rejected',
      ).length > 0 && (
        <Collapsible.Root>
          <Text> Pending Tasks </Text>
          <Collapsible.Trigger asChild>
            <Button>See</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {
              <Flex direction="column" gap="1">
                {
                  // pending and rejected tasks
                  tasks
                    .filter((task) =>
                      serviceView !== 'Show All'
                        ? task.Service === serviceView
                        : task,
                    )
                    .filter(
                      (task) =>
                        task.status === 'pending' || task.status === 'rejected',
                    )
                    .map((task) => {
                      return <Task key={task.taskID} {...task} />;
                    })
                }
              </Flex>
            }
          </Collapsible.Content>
        </Collapsible.Root>
      )}
      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
      {tasks.filter(
        (task) => task.status !== 'pending' && task.status !== 'rejected',
      ).length > 0 && (
        <Collapsible.Root>
          <Text> Accepted Tasks </Text>
          <Collapsible.Trigger asChild>
            <Button>See</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {
              <Flex direction="column" gap="1">
                {
                  // other tasks
                  <Flex direction="column" gap="1">
                    {tasks
                      .filter((task) =>
                        serviceView !== 'Show All'
                          ? task.Service === serviceView
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
        </Collapsible.Root>
      )}
      <Box></Box>
    </Flex>
  );
};

export default CreatorTabDashboard;
