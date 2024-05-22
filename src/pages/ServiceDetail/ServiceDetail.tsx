import { useParams } from 'react-router';
import { Flex, Heading, Separator, Tabs } from '@radix-ui/themes';
import { useEffect, useMemo, useState } from 'react';
import { Service, Task, TaskStatus } from '../../classes/service/service';
import TaskList from '../../components/TaskList/TaskList';
import StatusTab from '../../components/StatusTab/StatusTab';
import { getUserServiceById } from '../../services/apiServices';
import { Link } from 'react-router-dom';

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
      sorted[task.status].push(task);
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
    const runner = async () => {
      if (servID === undefined) {
        return;
      }
      const service = await getUserServiceById(Number(servID));
      setService(service);
    };
    runner();
  }, [servID]);

  async function handleTaskStatusChange(task: Task, status: TaskStatus) {
    console.log(task);
  }

  async function handleTaskDelete(task: Task) {
    console.log(task);
  }

  return (
    <Flex p="3" gap="3" direction="column">
      <Heading as="h1" size="7">
        {service?.name}
      </Heading>
      <Separator size="4" />
      <Heading as="h2" size="4">
        Tasks
      </Heading>
      <Link to={`/${userID}/services/${servID}/submit-task`}>Submit Task</Link>
      <Tabs.Root defaultValue="inProgress">
        <Tabs.List justify="center" m="3">
          {statuses.map((status, idx) => (
            <Tabs.Trigger key={idx} value={status}>
              <StatusTab status={status} />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {statuses.map((tag, idx) => (
          <Tabs.Content key={idx} value={tag}>
            <TaskList
              tasks={sortedTasks[tag]}
              onTaskStatusChange={handleTaskStatusChange}
              onTaskDelete={handleTaskDelete}
            />
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </Flex>
  );
}
