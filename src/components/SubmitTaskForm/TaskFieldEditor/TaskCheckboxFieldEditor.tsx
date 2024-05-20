import { CheckboxGroup } from "@radix-ui/themes";
import { CheckboxField, FormFieldType } from "../../../classes/service/formField";
import { FilledCheckboxField } from "../../../classes/service/service";

export default function TaskCheckboxFieldEditor(props: {
  field: CheckboxField,
  currentRequestField: FilledCheckboxField,
}) {
  return (
    <CheckboxGroup.Root defaultValue={[]}>
      {props.field.choices.map((choice, idx) => (
        <CheckboxGroup.Item key={idx} value={`${idx}`}>{choice}</CheckboxGroup.Item>
      ))}
    </CheckboxGroup.Root>
  )
}
