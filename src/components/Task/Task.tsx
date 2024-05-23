import React, { useEffect } from 'react';
import { Service, Task as taskInterface } from '../../classes/service/service';
import { Badge, Card, Flex, Text } from '@radix-ui/themes';
import { getUserServiceById } from '../../services/apiServices';

  // Define the color of the task based on the status
  // const statusToColorKey: { [key: string]: string } = {
  //   pending: 'rgba(255, 255, 255, 0.3)', //grey
  //   accepted: 'rgba(0, 0, 255, 0.7)', //blue
  //   inProgress: 'rgba(255, 165, 0, 0.7)', //orange
  //   done: 'rgba(0, 128, 0, 0.5)', //green
  //   rejected: 'rgba(255, 0, 0, 0.5)', //red
  // };

  // Define the badge color based on the status
  const statusToBadge = {
    pending: 'gray' as const,
    accepted: 'blue' as const,
    inProgress: 'gold' as const,
    done: 'green' as const,
    rejected: 'red' as const,
  };


function Task(props: { task: taskInterface }) {
  //TODO: I want to work on making a good set of contrasts for this. Looks bad rn

  const [service, setService] = React.useState<Service>({} as Service);
  useEffect(() => {
    const runner = async () => {
      const service = await getUserServiceById(props.task.serviceID);
      console.log(service);
      setService(service);
    }
    runner();
  },[props.task])


  return (
    <Card>
      <Flex justify="between" align="center">
        <Flex direction="column" justify="between" style={{ padding: '5' }}>
          <Text size="2">{service.name}</Text>
          <Text size="1">{props.task.client}</Text>
        </Flex>
        <Text size="1">
          <Badge color={statusToBadge[props.task.status]}>
            {props.task.status}
          </Badge>
        </Text>
      </Flex>
    </Card>
  );
}

export default Task;
