import { Box } from '@radix-ui/themes';
import { CheckboxField, FormFieldType } from './formField';

export default function CheckboxFormField(props: {
  field: CheckboxField;
  onChange: (field: FormFieldType) => void | undefined;
}) {
  return (
    <Box>
      Checkbox Field
      {props.field.prompt}
      {props.field.choices.map((choice) => {
        return <>{choice}</>;
      })}
    </Box>
  );
}
