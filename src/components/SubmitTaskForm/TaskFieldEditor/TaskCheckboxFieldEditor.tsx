import { CheckboxGroup } from '@radix-ui/themes';
import { CheckboxField } from '../../../classes/service/formField';
import {
  CheckboxRequestField,
  RequestField,
} from '../../../classes/service/service';

export default function TaskCheckboxFieldEditor(props: {
  field: CheckboxField;
  currentRequestField: CheckboxRequestField;
  onUpdate: (req: RequestField) => void;
}) {
  function handleChange(value: string[]) {
    props.onUpdate({
      ...props.currentRequestField,
      selection: value.map((v) => Number(v)),
    });
  }

  return (
    <CheckboxGroup.Root
      value={props.currentRequestField.selection.map((v) => `${v}`)}
      onValueChange={handleChange}
    >
      {props.field.choices.map((choice, idx) => (
        <CheckboxGroup.Item key={idx} value={`${idx}`}>
          {choice}
        </CheckboxGroup.Item>
      ))}
    </CheckboxGroup.Root>
  );
}
