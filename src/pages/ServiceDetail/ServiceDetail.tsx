import { useParams } from 'react-router';
import { Flex, Heading, Separator, Tabs } from '@radix-ui/themes';
import { useContext, useEffect, useMemo, useState } from 'react';
import { Service, Task } from '../../classes/service/service';
import TaskList from '../../components/TaskList/TaskList';
import StatusTab from '../../components/StatusTab/StatusTab';
import { getUserServiceById } from '../../services/apiServices';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import TaskComponent from '../../components/Task/Task';

const statuses = [
  'pending' as const,
  'accepted' as const,
  'inProgress' as const,
  'rejected' as const,
  'done' as const,
];

export default function ServiceDetail() {
  const { userID, servID } = useParams();
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);

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

  const isMine = isLoggedIn && loggedInUserID === Number(userID);

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
          {statuses
            .filter((status) => {
              if (!isMine) {
                if (status !== 'pending' as const && status !== 'accepted' as const && status !== 'rejected' as const) {
                  return status;
                }
              } else {
                return status;
              }
            })
            .map((status, idx) => (
              <Tabs.Trigger key={idx} value={status}>
                <StatusTab status={status} />
              </Tabs.Trigger>
            ))}
        </Tabs.List>
        {statuses
            .filter((status) => {
              if (isMine) {
                if (status !== 'pending' as const && status !== 'accepted' as const && status !== 'rejected' as const) {
                  return status;
                }
              } else {
                return status;
              }
            })
          .map((tag, idx) => {
              if (isMine) {
                return (
                  <Tabs.Content key={idx} value={tag}>
                    <TaskList tasks={sortedTasks[tag]} />
                  </Tabs.Content>
                );
              } else {
                return (
                  <Tabs.Content key={idx} value={tag}>
                    {sortedTasks[tag].map((task: Task, idx: number) => (
                      <TaskComponent key={idx} {...task} />
                    ))}
                  </Tabs.Content>
                );
              }
            })}
        </Tabs.Root>
    </Flex>
  );
}
