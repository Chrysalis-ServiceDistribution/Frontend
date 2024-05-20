import { RadioGroup } from '@radix-ui/themes';
import { FormFieldType, RadioField } from '../../../classes/service/formField';
import {
  RadioRequestField,
  RequestField,
} from '../../../classes/service/service';

export default function TaskRadioFieldEditor(props: {
  field: RadioField;
  currentRequestField: RadioRequestField;
  onUpdate: (req: RequestField) => void;
}) {
  function handleChange(value: string) {
    props.onUpdate({
      ...props.currentRequestField,
      selection: Number(value),
    });
  }

  return (
    <RadioGroup.Root
      value={`${props.currentRequestField.selection}`}
      onValueChange={handleChange}
    >
      {props.field.choices.map((choice, idx) => (
        <RadioGroup.Item key={idx} value={`${idx}`}>
          {choice}
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
