import { Card, Flex, Text } from "@radix-ui/themes";
import { FormFieldType } from "../../../classes/service/formField";
import { RequestField } from "../../../classes/service/service";
import TaskTextFieldEditor from "./TaskTextFieldEditor";
import TaskRadioFieldEditor from "./TaskRadioFieldEditor";
import TaskCheckboxFieldEditor from "./TaskCheckboxFieldEditor";

export default function TaskFieldEditor(props: {
  field: FormFieldType
  currentRequestField: RequestField
}) {

  let editor: React.ReactNode
  switch(props.field.type) {
    case "text":
      if (props.field.type !== props.currentRequestField.type) {
        throw new Error('non-matching types')
      }
      editor = <TaskTextFieldEditor field={props.field} currentRequestField={props.currentRequestField} />
    break;
    case "radio":
      if (props.field.type !== props.currentRequestField.type) {
        throw new Error('non-matching types')
      }
      editor = <TaskRadioFieldEditor field={props.field} currentRequestField={props.currentRequestField} />
    break;
    case "checkbox":
      if (props.field.type !== props.currentRequestField.type) {
        throw new Error('non-matching types')
      }
      editor = <TaskCheckboxFieldEditor field={props.field} currentRequestField={props.currentRequestField} />
    break;
  }
  return (
    <Card>
      <Flex p="2" gap="2" direction="column">
        <Text>{props.field.prompt}</Text>
        {editor}
      </Flex>
    </Card>
  )
}
