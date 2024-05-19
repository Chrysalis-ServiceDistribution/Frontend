import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Task as taskInterface } from '../../@types/task';
import Task from '../Task/Task';
import ServiceSelect from '../ServiceSelect/ServiceSelect';

import { Flex, Text, Button, Box } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';

//!! This is a mock data, replace it with the actual data from state/context
const exmpleTasks: taskInterface[] = [
  {
    taskID: 1,
    Service: 'Service 1',
    ClientForeinKey: 1,
    requestField: 'requestField 1',
    status: 'pending',
  },
  {
    taskID: 2,
    Service: 'Service 2',
    ClientForeinKey: 176840,
    requestField: 'requestField 2',
    status: 'pending',
  },
  {
    taskID: 3,
    Service: 'Service 3',
    ClientForeinKey: 3434321,
    requestField: 'requestField 3',
    status: 'in progress',
  },
  {
    taskID: 4,
    Service: 'Service 4',
    ClientForeinKey: 343242,
    requestField: 'requestField 4',
    status: 'pending',
  },
  {
    taskID: 5,
    Service: 'Service 5',
    ClientForeinKey: 1432423,
    requestField: 'requestField 5',
    status: 'rejected',
  },
];

const CreatorTabDashboard = () => {
  const navigate = useNavigate();

  const [services, setServices] = React.useState<string[]>([]);
  const [serviceView, setServiceView] = React.useState<string>('Show All');

  useEffect(() => {
    //TODO: Change this to get the services from the user context
    setServices([...new Set(exmpleTasks.map((task) => task.Service))]);
  }, []);

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
                exmpleTasks
                  .filter((task) =>
                    serviceView !== 'Show All'
                      ? task.Service === serviceView
                      : task,
                  )
                  .filter(
                    (task) =>
                      task.status === 'pending' || task.status === 'rejected',
                  )
                  .map((task: taskInterface) => {
                    return <Task key={task.taskID} {...task} />;
                  })
              }
            </Flex>
          }
        </Collapsible.Content>
      </Collapsible.Root>

      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
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
                  {exmpleTasks
                    .filter((task) =>
                      serviceView !== 'Show All'
                        ? task.Service === serviceView
                        : task,
                    )
                    .filter(
                      (task) =>
                        task.status !== 'pending' && task.status !== 'rejected',
                    )
                    .map((task: taskInterface) => {
                      return <Task key={task.taskID} {...task} />;
                    })}
                </Flex>
              }
            </Flex>
          }
        </Collapsible.Content>
      </Collapsible.Root>

      <Box></Box>
    </Flex>
  );
};

export default CreatorTabDashboard;
