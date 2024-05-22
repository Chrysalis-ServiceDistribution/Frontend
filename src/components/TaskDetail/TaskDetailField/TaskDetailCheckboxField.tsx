import { CheckboxGroup } from "@radix-ui/themes";
import { RequestCheckboxField } from "../../../classes/service/service";

export default function TaskDetailCheckboxField(props: {
  field: RequestCheckboxField,
}) {
  return (
    <CheckboxGroup.Root value={props.field.selection.map((s) => `${s}`)} disabled={true}>
      {props.field.choices.map((c, idx) => (
        <CheckboxGroup.Item key={idx} value={`${idx}`}>{c}</CheckboxGroup.Item>
      ))}
    </CheckboxGroup.Root>
  )
}
