import React, { useContext, useEffect, useState } from 'react';
import { Service, Task as taskInterface } from '../../classes/service/service';
import ServiceSelect from '../ServiceSelect/ServiceSelect';
import Task from '../Task/Task';
import { Flex, Text, Button } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { getUserInfo } from '../../services/apiServices';

const CreatorTabDashboard = (props: { tasks: taskInterface[] }) => {
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);
  const { tasks } = props;

  const [services, setServices] = useState<Service[]>([]);
  const [currentService, setCurrentService] = useState<number | null>(null);

  useEffect(() => {
    const runner = async () => {
      if (loggedInUserID === null || !isLoggedIn) {
        return;
      }
      const userData = await getUserInfo(loggedInUserID);
      setServices(userData.services);
    };
    runner();
  }, [isLoggedIn, loggedInUserID]);

  return (
    <Flex direction="column" gap="2">
      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
      <Text size="5">Your reqests and task status'</Text>
      <Link to={`/${loggedInUserID}/services/create`}>
        <Button>Create new service</Button>
      </Link>
      <ServiceSelect services={services} setService={setCurrentService} />
      {tasks?.filter(
        (task) => task.status === 'pending' || task.status === 'rejected',
      ).length > 0 && (
        <Collapsible.Root>
          <Text> Pending Tasks </Text>
          <Collapsible.Trigger asChild>
            <Button>See</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {
              <Flex direction="column" gap="1">
                {
                  // pending and rejected tasks
                  tasks
                    .filter(
                      (task) =>
                        currentService === null ||
                        task.serviceID === services[currentService].id,
                    )
                    .filter(
                      (task) =>
                        task.status === 'pending' || task.status === 'rejected',
                    )
                    .map((task) => {
                      return (
                        <Link
                          to={`/${loggedInUserID}/services/${task.serviceID}`}
                        >
                          <Task key={task.taskID} task={task} />
                        </Link>
                      );
                    })
                }
              </Flex>
            }
          </Collapsible.Content>
        </Collapsible.Root>
      )}
      {/* //TODO: Change button to be icon, text needs to be dynamic, hide if there is nothing to show */}
      {tasks.filter(
        (task) => task.status !== 'pending' && task.status !== 'rejected',
      ).length > 0 && (
        <Collapsible.Root>
          <Text> Accepted Tasks </Text>
          <Collapsible.Trigger asChild>
            <Button>See</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {
              <Flex direction="column" gap="1">
                {
                  // other tasks
                  <Flex direction="column" gap="1">
                    {tasks
                      .filter(
                        (task) =>
                          currentService === null ||
                          task.serviceID === services[currentService].id,
                      )
                      .filter(
                        (task) =>
                          task.status !== 'pending' &&
                          task.status !== 'rejected',
                      )
                      .map((task) => {
                        return (
                          <Link
                            to={`/${loggedInUserID}/services/${task.serviceID}`}
                          >
                            <Task key={task.taskID} task={task} />
                          </Link>
                        );
                      })}
                  </Flex>
                }
              </Flex>
            }
          </Collapsible.Content>
        </Collapsible.Root>
      )}
      <Link to={`/${loggedInUserID}/services`}>
        <Button>View your services</Button>
      </Link>
    </Flex>
  );
};

export default CreatorTabDashboard;
