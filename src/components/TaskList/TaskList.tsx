import { Flex } from '@radix-ui/themes';
import { Task } from '../../classes/service/service';
import TaskCard from '../TaskCard/TaskCard';

export default function TaskList(props: { tasks: Task[] }) {
  return (
    <Flex direction="column">
      {props.tasks.map((task, idx) => (
        <TaskCard task={task} key={idx} />
      ))}
    </Flex>
  )
}
