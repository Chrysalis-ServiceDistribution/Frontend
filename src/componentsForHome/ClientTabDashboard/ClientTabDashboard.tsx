import {useNavigate} from 'react-router-dom';

import { Task as taskInterface } from '../../@types/task';
import Task from '../Task/Task';

import { Button, Box, Flex, Text } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useState, useEffect } from 'react';


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
    status: 'accepted',
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
    status: 'done',
  },
  {
    taskID: 5,
    Service: 'Service 5',
    ClientForeinKey: 1432423,
    requestField: 'requestField 5',
    status: 'rejected',
  },
];

const ClientTabDashboard = () => {

  const navigate = useNavigate();
  const [tasks, setTasks] = useState<taskInterface[]>([]);
  useEffect(() => {
    setTasks(exmpleTasks);
  })
  return(
  <Flex direction="column" gap="2">
    <Text size="6">Outbound Tasks and Status</Text>
    <Button onClick={() => {navigate('/search')}}>Search for a new service</Button>

    {/* //TODO: Change button to be icon, text needs to be dynamic, hide? if there is nothing to show */}
    <Collapsible.Root>
        <Text> Outgoing Tasks </Text>
        <Collapsible.Trigger asChild>
          <Button>see</Button>
        </Collapsible.Trigger>
        <Collapsible.Content>
          {
            <Flex direction="column" gap="1">
              {exmpleTasks.map((task: taskInterface) => {
                return <Task key={task.taskID} {...task} />;
              }, 0)}
            </Flex>
          }
        </Collapsible.Content>
      </Collapsible.Root>

    <Box>
      
    </Box>
  </Flex>
  )
};

export default ClientTabDashboard;
