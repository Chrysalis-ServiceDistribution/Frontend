import { Button, Card, Dialog, Flex, Grid, Heading } from '@radix-ui/themes';
import { Service, Task, TaskStatus } from '../../classes/service/service';
import NoOutlineIconButton from '../ServiceFormEditor/FieldEditor/NoOutlineIconButton';
import { Cross1Icon } from '@radix-ui/react-icons';
import SetTaskStatusDropdown from './SetTaskStatusDropdown';
import { useState } from 'react';
import TaskDetail from '../TaskDetail/TaskDetail';

export default function TaskCard(props: {
  task: Task;
  service: Service;
  onStatusChange: (status: TaskStatus) => void;
  onDelete: () => void;
}) {
  const [dialogActive, setDialogActive] = useState(false);
  return (
    <>
    <Card>
      <Grid gap="3" columns="var(--space-5) 1fr">
        <Flex direction="column" justify="center" align="center" gap="2">
          <NoOutlineIconButton onClick={props.onDelete}>
            <Cross1Icon />
          </NoOutlineIconButton>
        </Flex>
        <Flex direction="column" gap="2" justify="center">
          <Flex direction="row" gap="3" align="center">
            <Heading as="h4" size="3">
              client name
            </Heading>
            <Button onClick={() => setDialogActive(true)}>Details</Button>
          </Flex>
          <SetTaskStatusDropdown
            status={props.task.status}
            onSelect={props.onStatusChange}
          />
        </Flex>
      </Grid>
    </Card>
    <Dialog.Root open={dialogActive}>
      <Dialog.Content>
        <Flex gap="2">
          <SetTaskStatusDropdown
            status={props.task.status}
            onSelect={props.onStatusChange}
          />
          <Button onClick={props.onDelete}>Delete Task</Button>
        </Flex>
        <TaskDetail
          task={props.task}
          service={props.service}
          clientName={"client name"}
          changeTaskStatus={props.onStatusChange}
          deleteTask={props.onDelete}
        />
        <Button onClick={() => setDialogActive(false)}>Close</Button>
      </Dialog.Content>
    </Dialog.Root>
    </>
  );
}
