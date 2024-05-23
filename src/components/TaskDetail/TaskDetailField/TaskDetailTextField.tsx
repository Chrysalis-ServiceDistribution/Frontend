import { TextArea } from "@radix-ui/themes";
import { RequestTextField } from "../../../classes/service/service";

export default function TaskDetailTextField(props: {
  field: RequestTextField,
}) {
  return (
    <TextArea value={props.field.value} disabled={true} />
  )
}
