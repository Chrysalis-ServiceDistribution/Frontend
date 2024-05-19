import { Button, Box, Flex, Text } from '@radix-ui/themes';
import React from 'react';
import { Task as taskInterface } from '../../@types/task';
import Task from '../Task/Task';

// Example tasks to prototype the component
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

const ClientTabDashboard = () => (
  /* Add your component logic here*/ <Flex direction="column" gap="2">
    <Text size="6">Outbound Tasks and Status</Text>
    <Button>Search for a new service</Button>

    <Box>
      {
        <Flex direction="column" gap="1">
          {exmpleTasks.map((task: taskInterface) => {
            return <Task key={task.taskID} {...task} />;
          }, 0)}
        </Flex>
        //map over the tasks based on the users tasks and display them
        //find all tasks by wtih FK userID
      }
    </Box>
  </Flex>
);

export default ClientTabDashboard;
