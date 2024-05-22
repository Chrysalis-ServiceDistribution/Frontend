import Task from '../Task/Task';
import { Task as taskInterface } from '../../classes/service/service';
import { Flex, Text, Card } from '@radix-ui/themes';

const ClientTabDashboard = (props: { tasks: taskInterface[] }) => {
  const { tasks } = props;

  return (
    <Flex direction="column" gap="4">
      <Card>
        <Text size="5">Outbound Tasks and Status</Text>
      </Card>

      {/* //TODO: Change button to be icon, text needs to be dynamic*/}
      {tasks.length > 0 && (
        <Flex direction="column" gap="1">
          {tasks.map((task) => {
            return <Task key={task.taskID} task={task} />;
          }, 0)}
        </Flex>
      )}
    </Flex>
  );
};

export default ClientTabDashboard;
