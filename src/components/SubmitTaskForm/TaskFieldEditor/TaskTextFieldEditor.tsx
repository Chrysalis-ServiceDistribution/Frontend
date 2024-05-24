import { TextArea } from '@radix-ui/themes';
import { ServiceField } from '../../../classes/service/formField';
import {
  RequestTextField,
  RequestField,
} from '../../../classes/service/service';

export default function TaskTextFieldEditor(props: {
  field: ServiceField;
  currentRequestField: RequestTextField;
  onUpdate: (req: RequestField) => void;
}) {
  function handleChange(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    props.onUpdate({
      ...props.currentRequestField,
      value: evt.currentTarget.value,
    });
  }

  return (
    <>
      <TextArea
        placeholder="Type response here..."
        value={props.currentRequestField.value}
        onChange={handleChange}
      >{props.currentRequestField.value}</TextArea>
    </>
  );
}
