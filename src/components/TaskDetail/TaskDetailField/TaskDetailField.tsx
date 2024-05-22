import { Box, Heading } from "@radix-ui/themes";
import { RequestField } from "../../../classes/service/service";
import TaskDetailCheckboxField from "./TaskDetailCheckboxField";
import TaskDetailRadioField from "./TaskDetailRadioField";
import TaskDetailTextField from "./TaskDetailTextField";

export default function TaskDetailField(props: {
  field: RequestField,
}) {
  let elem: React.ReactNode
  switch(props.field.type) {
    case "text":
      elem = <TaskDetailTextField field={props.field} />
    break;
    case "radio":
      elem = <TaskDetailRadioField field={props.field} />
    break;
    case "checkbox":
      elem = <TaskDetailCheckboxField field={props.field} />
    break;
  }

  return (
    <Box>
      <Heading as="h5" size="3">{props.field.prompt}</Heading>
      {elem}
    </Box>
  )
}
