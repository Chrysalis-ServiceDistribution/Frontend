import { Box } from '@radix-ui/themes';
import { RadioField, FormFieldType } from './formField';

export default function RadioFormField(props: {
  field: RadioField;
  onChange: (field: FormFieldType) => void | undefined;
}) {
  return (
    <Box>
      Radio Field
      {props.field.prompt}
      {props.field.choices.map((choice) => {
        return <>{choice}</>;
      })}
    </Box>
  );
}
