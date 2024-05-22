import { RadioGroup } from "@radix-ui/themes";
import { RequestRadioField } from "../../../classes/service/service";

export default function TaskDetailRadioField(props: {
  field: RequestRadioField,
}) {
  return (
    <RadioGroup.Root value={`${props.field.selection}`} disabled={true}>
      {props.field.choices.map((c, idx) => (
        <RadioGroup.Item key={idx} value={`${idx}`}>{c}</RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
