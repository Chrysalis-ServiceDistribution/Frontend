import { Box } from '@radix-ui/themes';
import CheckboxFormField from './CheckboxFormField';
import RadioFormField from './RadioFormField';
import TextFormField from './TextFormField';
import { FormFieldType } from './formField';

export default function FormField(props: {
  field: FormFieldType;
  onChange: (field: FormFieldType) => void | undefined;
  onMoveUp: () => void | undefined;
  onMoveDown: () => void | undefined;
  onDelete: () => void | undefined;
}) {
  let theField: React.ReactNode;
  switch (props.field.type) {
    case 'text':
      theField = (
        <TextFormField field={props.field} onChange={props.onChange} />
      );
      break;
    case 'radio':
      theField = (
        <RadioFormField field={props.field} onChange={props.onChange} />
      );
      break;
    case 'checkbox':
      theField = (
        <CheckboxFormField field={props.field} onChange={props.onChange} />
      );
      break;
  }

  return (
    <Box>
      {theField}
    </Box>
  )
}
