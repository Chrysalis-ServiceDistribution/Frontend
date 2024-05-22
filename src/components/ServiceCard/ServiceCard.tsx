import './ServiceCard.css';
import { Card, Flex, Heading, Inset, Box, Theme } from '@radix-ui/themes';
import { Service, Task } from '../../classes/service/service';
import { useMemo } from 'react';

const taskColors = {
  pending: 'gray' as const,
  accepted: 'blue' as const,
  rejected: 'red' as const,
  inProgress: 'yellow' as const,
  done: 'green' as const,
};

export default function ServiceCard(props: { service: Service }) {
  const sortedTasks = useMemo(() => {
    const sorted: {
      pending: Task[];
      accepted: Task[];
      inProgress: Task[];
      done: Task[];
      rejected: Task[];
    } = {
      pending: [],
      accepted: [],
      inProgress: [],
      done: [],
      rejected: [],
    };
    for (const task of props.service.tasks) {
      sorted[task.status].push(task);
    }
    return sorted;
  }, [props.service.tasks]);

  const taskCounts = useMemo(() => {
    const res: {
      type: 'pending' | 'accepted' | 'inProgress' | 'done' | 'rejected';
      count: number;
    }[] = [];
    for (const tag of [
      'pending',
      'accepted',
      'inProgress',
      'done',
      'rejected',
    ] as const) {
      if (sortedTasks[tag].length > 0) {
        res.push({
          type: tag,
          count: sortedTasks[tag].length,
        });
      }
    }
    return res;
  }, [sortedTasks]);

  // console.log(taskCounts);

  return (
    <Card>
      <Flex direction="column" gap="3" justify='between'>
        <Heading as="h3" size="3">
          {props.service.name}
        </Heading>
        <Inset clip="padding-box" side="bottom" pb="0">
          <Flex>
            {taskCounts?.map((taskCount, idx) => (
              <Theme
                asChild={true}
                key={idx}
                accentColor={taskColors[taskCount.type]}
              >
                <Box className="task-count">{taskCount.count}</Box>
              </Theme>
            ))}
          </Flex>
        </Inset>
      </Flex>
    </Card>
  );
}
