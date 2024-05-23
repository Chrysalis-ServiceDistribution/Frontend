import { RadioGroup } from '@radix-ui/themes';
import {
  ServiceField,
  ServiceRadioField,
} from '../../../classes/service/formField';
import {
  RequestRadioField,
  RequestField,
} from '../../../classes/service/service';

export default function TaskRadioFieldEditor(props: {
  field: ServiceRadioField;
  currentRequestField: RequestRadioField;
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
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
