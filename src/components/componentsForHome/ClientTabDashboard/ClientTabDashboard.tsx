import { useNavigate } from 'react-router-dom';

import Task from '../Task/Task';
import DashboardProps from '../../../@types/dashboard';
import { Button, Flex, Text } from '@radix-ui/themes';
import * as Collapsible from '@radix-ui/react-collapsible';

const ClientTabDashboard: React.FC<DashboardProps> = ({ tasks }) => {
  const navigate = useNavigate();

  return (
    <Flex direction="column" gap="2">
      <Text size="6">Outbound Tasks and Status</Text>
      <Button
        onClick={() => {
          navigate('/search');
        }}
      >
        Search for a new service
      </Button>

      {/* //TODO: Change button to be icon, text needs to be dynamic*/}
      {tasks.length > 0 && (
        <Collapsible.Root>
          <Text> Outgoing Tasks </Text>
          <Collapsible.Trigger asChild>
            <Button>see</Button>
          </Collapsible.Trigger>
          <Collapsible.Content>
            {
              <Flex direction="column" gap="1">
                {tasks.map((task) => {
                  return <Task key={task.taskID} {...task} />;
                }, 0)}
              </Flex>
            }
          </Collapsible.Content>
        </Collapsible.Root>
      )}
    </Flex>
  );
};

export default ClientTabDashboard;
