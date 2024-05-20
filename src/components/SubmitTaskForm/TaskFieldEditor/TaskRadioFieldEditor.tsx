import { RadioGroup } from "@radix-ui/themes";
import { FormFieldType, RadioField } from "../../../classes/service/formField";
import { FilledRadioField } from "../../../classes/service/service";

export default function TaskRadioFieldEditor(props: {
  field: RadioField,
  currentRequestField: FilledRadioField,
}) {
  return (
    <RadioGroup.Root defaultValue="0">
      {props.field.choices.map((choice, idx) => (
        <RadioGroup.Item key={idx} value={`${idx}`}>{choice}</RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  )
}
