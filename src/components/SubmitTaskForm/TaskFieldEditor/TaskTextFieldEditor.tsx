import { TextArea } from "@radix-ui/themes";
import { FormFieldType } from "../../../classes/service/formField";
import { FilledTextField } from "../../../classes/service/service";

export default function TaskTextFieldEditor(props: {
  field: FormFieldType,
  currentRequestField: FilledTextField,
}) {
  return (
    <>
      <TextArea placeholder="Type response here..."> 
      </TextArea>
    </>
  )
}
