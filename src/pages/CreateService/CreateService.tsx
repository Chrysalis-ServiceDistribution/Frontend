import { useState } from 'react';
import {
  CheckboxField,
  FormFieldType,
  RadioField,
  TextField,
} from '../../components/formField/formField';
import { Box, Button, Flex } from '@radix-ui/themes';
import FormField from '../../components/formField/FormField';

export default function CreateService() {
  const [formFields, setFormFields] = useState<FormFieldType[]>([]);

  function setFormField(index: number, field: FormFieldType) {
    setFormFields((prevFormFields) => {
      let next = [...prevFormFields];
      next.splice(index, 1, field);
      return next;
    });
  }

  function createTextField() {
    setFormFields([...formFields, new TextField('Prompt goes here')]);
  }

  function createRadioField() {
    setFormFields([
      ...formFields,
      new RadioField('Prompt goes here', ['Choice 1']),
    ]);
  }

  function createCheckboxField() {
    setFormFields([
      ...formFields,
      new CheckboxField('Prompt goes here', ['Choice 1']),
    ]);
  }

  function deleteField(index: number) {
    setFormFields((prevFormFields) => {
      let next = [...prevFormFields];
      next.splice(index, 1);
      return next;
    });
  }

  function moveFieldUp(index: number) {}

  function moveFieldDown(index: number) {}

  return (
    <Box width="512px">
      <Flex direction="column" gap="1">
        {formFields.map((field, idx) => (
          <FormField
            key={idx}
            field={field}
            onChange={(f) => setFormField(idx, f)}
            onMoveUp={() => moveFieldUp(idx)}
            onMoveDown={() => moveFieldDown(idx)}
            onDelete={() => deleteField(idx)}
          />
        ))}
        <Button onClick={createTextField}>Create Text Field</Button>
        <Button onClick={createRadioField}>Create Radio Field</Button>
        <Button onClick={createCheckboxField}>Create Checkbox Field</Button>
      </Flex>
    </Box>
  );
}
