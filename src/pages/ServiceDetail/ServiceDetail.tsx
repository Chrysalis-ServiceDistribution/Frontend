import { useParams } from 'react-router';
import dummyServices from '../UserServices/services';
import { Grid, Flex, Heading, Separator, Tabs } from '@radix-ui/themes';
import { useEffect, useMemo, useState } from 'react';
import { Service, Task } from '../../classes/service/service';
import TaskList from '../../components/TaskList/TaskList';
import { CheckIcon, ClockIcon, Cross1Icon, EnvelopeClosedIcon, RocketIcon } from '@radix-ui/react-icons';
import StatusTab from '../../components/StatusTab/StatusTab';

type TaskStatus = 'pending' | 'accepted' | 'inProgress' | 'rejected' | 'done';
const statuses = [
  'pending' as const,
  'accepted' as const,
  'inProgress' as const,
  'rejected' as const,
  'done' as const,
];

export default function ServiceDetail() {
  const { userID, servID } = useParams();
  const [service, setService] = useState<Service | null>(null);

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

    if (service === null) {
      return sorted;
    }

    for (const task of service.tasks) {
      sorted[task.status].push(task)
    }

    return sorted;
  }, [service]);

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

  useEffect(() => {
    const servNumber = Number(servID);
    setService(dummyServices[servNumber]);
  }, [servID]);

  return (
    <Flex p="3" gap="3" direction="column">
      <Heading as="h1" size="7">
        {service?.name}
      </Heading>
      <Separator size="4" />
      <Heading as="h2" size="4">
        Tasks
      </Heading>
      <Tabs.Root defaultValue="inProgress">
        <Tabs.List justify="center">
          {statuses.map((status, idx) => (
            <Tabs.Trigger value={status}>
              <StatusTab key={idx} status={status} />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
      </Tabs.Root>
      {statuses.map((tag, idx) => {
        return <TaskList key={idx} tasks={sortedTasks[tag]} />;
      })}
    </Flex>
  );
}
