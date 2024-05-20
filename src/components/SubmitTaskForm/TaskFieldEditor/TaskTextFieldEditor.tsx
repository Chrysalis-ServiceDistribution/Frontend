import { TextArea } from '@radix-ui/themes';
import { FormFieldType } from '../../../classes/service/formField';
import {
  TextRequestField,
  RequestField,
} from '../../../classes/service/service';

export default function TaskTextFieldEditor(props: {
  field: FormFieldType;
  currentRequestField: TextRequestField;
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
      ></TextArea>
    </>
  );
}
