import { Card, Flex, Grid, Heading } from '@radix-ui/themes';
import { Task, TaskStatus } from '../../classes/service/service';
import NoOutlineIconButton from '../ServiceFormEditor/FieldEditor/NoOutlineIconButton';
import { Cross1Icon } from '@radix-ui/react-icons';
import SetTaskStatusDropdown from './SetTaskStatusDropdown';

export default function TaskCard(props: {
  task: Task;
  onStatusChange: (status: TaskStatus) => void;
  onDelete: () => void;
}) {
  return (
    <Card>
      <Grid gap="3" columns="var(--space-5) 1fr">
        <Flex direction="column" justify="center" align="center" gap="2">
          <NoOutlineIconButton onClick={props.onDelete}>
            <Cross1Icon />
          </NoOutlineIconButton>
        </Flex>
        <Flex direction="column" gap="2" justify="center">
          <Heading as="h4" size="3">
            {props.task.client}
          </Heading>
          <SetTaskStatusDropdown
            status={props.task.status}
            onSelect={props.onStatusChange}
          />
        </Flex>
      </Grid>
    </Card>
  );
}
