import { Box } from '@radix-ui/themes';
import { TextField, FormFieldType } from './formField';

export default function TextFormField(props: {
  field: TextField;
  onChange: (field: FormFieldType) => void | undefined;
}) {
  return (
    <Box>
      Text Field
      {props.field.prompt}
    </Box>
  );
}
