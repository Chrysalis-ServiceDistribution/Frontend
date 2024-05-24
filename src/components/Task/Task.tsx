import React, { useEffect } from 'react';
import { Service, Task as taskInterface } from '../../classes/service/service';
import { Badge, Card, Flex, Text } from '@radix-ui/themes';
import { getUserServiceById } from '../../services/apiServices';

  const statusToBadge = {
    pending: 'bronze' as const,
    accepted: 'blue' as const,
    inProgress: 'yellow' as const,
    done: 'green' as const,
    rejected: 'red' as const,
  };


function Task(props: { task: taskInterface }) {
  const [service, setService] = React.useState<Service>({} as Service);
  useEffect(() => {
    const runner = async () => {
      const service = await getUserServiceById(props.task.serviceID);
      setService(service);
    }
    runner();
  },[props.task])


  return (
    <Card>
      <Flex justify="between" align="center">
        <Flex direction="column" justify="between" style={{ padding: '5' }}>
          <Text size="2">{service.name}</Text>
        </Flex>
        <Text size="1">
          <Badge variant='surface' color={statusToBadge[props.task.status]}>
            {props.task.status}
          </Badge>
        </Text>
      </Flex>
    </Card>
  );
}

export default Task;
