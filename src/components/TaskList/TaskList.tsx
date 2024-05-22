import { Flex } from '@radix-ui/themes';
import { Task, TaskStatus } from '../../classes/service/service';
import TaskCard from '../TaskCard/TaskCard';

export default function TaskList(props: {
  tasks: Task[];
  onTaskStatusChange: (task: Task, status: TaskStatus) => void;
  onTaskDelete: (task: Task) => void;
}) {
  function handleTaskStatusChange(idx: number) {
    return (status: TaskStatus) => {
      props.onTaskStatusChange(props.tasks[idx], status);
    };
  }

  function handleTaskDelete(idx: number) {
    return () => {
      props.onTaskDelete(props.tasks[idx]);
    };
  }

  return (
    <Flex direction="column">
      {props.tasks.map((task, idx) => (
        <TaskCard
          key={idx}
          task={task}
          onStatusChange={handleTaskStatusChange(idx)}
          onDelete={handleTaskDelete(idx)}
        />
      ))}
    </Flex>
  );
}
