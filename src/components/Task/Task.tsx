import React from 'react';
import {Task as taskInterface} from '../../classes/service/service';
import { Badge, Flex, Text } from '@radix-ui/themes';

const Task: React.FC<taskInterface> = (task) => {
  //TODO: I want to work on making a good set of contrasts for this. Looks bad rn
  // Define the color of the task based on the status
  const statusToColorKey: { [key: string]: string } = {
    pending: 'rgba(255, 255, 255, 0.3)', //grey
    accepted: 'rgba(0, 0, 255, 0.7)', //blue
    'in progress': 'rgba(255, 165, 0, 0.7)', //orange
    done: 'rgba(0, 128, 0, 0.5)', //green
    rejected: 'rgba(255, 0, 0, 0.5)', //red
  };

  // Define the badge color based on the status
  const statusToBadge = {
    pending: 'gray' as const,
    accepted: 'blue' as const,
    inProgress: 'gold' as const,
    done: 'green' as const,
    rejected: 'red' as const,
  };

  return (
    <Flex
      justify="between"
      align="center"
      style={{
        background: statusToColorKey[task.status],
        padding: 6,
      }}
    >
      <Flex direction="column" justify="between">
        <Text size="3">{task.service}</Text>
        <Text size="2">{task.client}</Text>
      </Flex>
      <Text size="1">
        <Badge color={statusToBadge[task.status]}>{task.status}</Badge>
      </Text>
    </Flex>
  );
};

export default Task;
