import { Flex, Heading, Separator, Text } from "@radix-ui/themes";
import { Service, Task, TaskStatus } from "../../classes/service/service";
import TaskDetailField from "./TaskDetailField/TaskDetailField";

export default function TaskDetail(props: {
  task: Task,
  service: Service,
  clientName: string,

  changeTaskStatus: (status: TaskStatus) => void,
  deleteTask: () => void,
}) {
  console.log(props.task.requestFields);
  return (
    <Flex p="3" gap="3" direction="column">
      <Heading as="h1" size="7">{props.service.name}</Heading>
      <Text as="p">{props.service.description}</Text>
      <Separator size="4" />
      {props.task.requestFields.map((field, idx) => (
        <TaskDetailField key={idx} field={field} />
      ))}
    </Flex>
  )
}
