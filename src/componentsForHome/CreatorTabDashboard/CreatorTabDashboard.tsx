import React from 'react';
import { Task as taskInterface } from '../../@types/task';
import Task from '../Task/Task';
import { Flex, Text, Button, Box } from '@radix-ui/themes';
import ServiceSelect from '../ServiceSelect/ServiceSelect';
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
  // Add your component logic here

  //sort tasks into pending and rejected, and then the rest
  //display the pending and rejected in the first collapsable
  //display the rest in the second collapsable
  const [services, setServices] = React.useState<string[]>(
    exmpleTasks.map((task) => task.Service),
  );
  const [serviceView, setServiceView] = React.useState<string>('Show All');

  return (
    <Flex direction="column" gap="2">
      <Text size="5">Your reqests and task status'</Text>
      <Button>View your services</Button>
      <ServiceSelect services={services} setServiceView={setServiceView} />
      <Box>
        {
          <Flex direction="column" gap="1">
            {  // pending and rejected tasks
            exmpleTasks
            .filter(
              (task) => serviceView !== 'Show All' ? task.Service === serviceView : task,)
            .filter(
              (task) => task.status === 'pending' || task.status === 'rejected',)
            .map((task: taskInterface) => {
                return <Task key={task.taskID} {...task} />;
            },)}
          </Flex>
          //map over the tasks based on the users tasks and display them
          //find all tasks by wtih FK userID
        }
      </Box>

      <Box>
        { // other tasks
          <Flex direction="column" gap="1">
            {exmpleTasks
            .filter(
              (task) => serviceView !== 'Show All' ? task.Service === serviceView : task,)
            .filter(
              (task) => task.status !== 'pending' && task.status !== 'rejected',)
            .map((task: taskInterface) => {
              return <Task key={task.taskID} {...task} />;
            },)}
          </Flex>
          //map over the tasks based on the users tasks and display them
          //find all tasks by wtih FK userID
        }
      </Box>
    </Flex>
  );
};

export default CreatorTabDashboard;
