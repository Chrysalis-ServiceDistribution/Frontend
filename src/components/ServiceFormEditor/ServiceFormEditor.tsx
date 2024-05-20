import { useState } from 'react';
import {
  CheckboxField,
  ServiceForm,
  FormFieldType,
  RadioField,
  TextField,
  sanitize,
  validate,
} from '../../classes/service/formField';
import {
  Dialog,
  Box,
  Button,
  Flex,
  TextField as RadixTextField,
  Separator,
  Text,
  TextArea,
} from '@radix-ui/themes';
import FieldEditor from './FieldEditor/FieldEditor';

export default function ServiceFormEditor(props: {
  onCommit: (service: ServiceForm) => void;
}) {
  const [formData, setFormData] = useState<ServiceForm>({
    name: '',
    description: '',
    fields: [],
  });

  const [showFormErrors, setShowFormErrors] = useState<boolean>(false);
  const [formErrors, setFormErrors] = useState<string[]>([]);

  function setServiceName(evt: React.ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      name: evt.currentTarget.value,
    });
  }

  function setServiceDescription(evt: React.ChangeEvent<HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      description: evt.currentTarget.value,
    });
  }

  function setFormField(index: number) {
    return (field: FormFieldType) => {
      setFormData((prevFormData) => {
        const nextFields = [...prevFormData.fields];
        nextFields.splice(index, 1, field);
        return {
          ...prevFormData,
          fields: nextFields,
        };
      });
    };
  }

  function createTextField() {
    setFormData({
      ...formData,
      fields: [
        ...formData.fields,
        new TextField(`Text field prompt goes here`),
      ],
    });
  }

  function createRadioField() {
    setFormData({
      ...formData,
      fields: [
        ...formData.fields,
        new RadioField(`Radio field prompt goes here`, ['Choice 1']),
      ],
    });
  }

  function createCheckboxField() {
    setFormData({
      ...formData,
      fields: [
        ...formData.fields,
        new CheckboxField(`Checkbox field prompt goes here`, ['Choice 1']),
      ],
    });
  }

  function deleteField(index: number) {
    return () => {
      setFormData((prevFormData) => {
        const nextFields = [...prevFormData.fields];
        nextFields.splice(index, 1);
        return {
          ...prevFormData,
          fields: nextFields,
        };
      });
    };
  }

  function moveFieldUp(index: number) {
    return () => {
      if (index === 0) {
        return;
      }
      const curr = formData.fields[index];
      const above = formData.fields[index - 1];
      setFormData((prevFormData) => {
        const nextFields = [...prevFormData.fields];
        nextFields.splice(index - 1, 2, curr, above);
        return {
          ...prevFormData,
          fields: nextFields,
        };
      });
    };
  }

  function moveFieldDown(index: number) {
    return () => {
      if (index === formData.fields.length - 1) {
        return;
      }
      const curr = formData.fields[index];
      const below = formData.fields[index + 1];
      setFormData((prevFormData) => {
        const nextFields = [...prevFormData.fields];
        nextFields.splice(index, 2, below, curr);
        return {
          ...prevFormData,
          fields: nextFields,
        };
      });
    };
  }

  function replaceField(index: number) {
    const oldField = formData.fields[index];
    return (type: string) => {
      let newField: FormFieldType;
      switch (type) {
        case 'text':
          newField = new TextField(oldField.prompt);
          break;
        case 'radio':
          newField = new RadioField(oldField.prompt, ['Choice 1']);
          break;
        case 'checkbox':
          newField = new CheckboxField(oldField.prompt, ['Choice 1']);
          break;
        default:
          return;
      }

      setFormData((prevFormData) => {
        const nextFields = [...prevFormData.fields];
        nextFields.splice(index, 1, newField);
        return {
          ...prevFormData,
          fields: nextFields,
        };
      });
    };
  }

  function onSubmit() {
    const sanitized = sanitize(formData);
    const errors = validate(sanitized);
    if (errors.length > 0) {
      setShowFormErrors(true);
      setFormErrors(errors);
      return;
    }

    props.onCommit(sanitize(formData));
  }

  return (
    <Box p="3">
      <Flex direction="column" gap="2">
        <Box>
          <Text as="label">Service Name</Text>
          <RadixTextField.Root
            placeholder="Service name goes here..."
            required={true}
            value={formData.name}
            onChange={setServiceName}
          ></RadixTextField.Root>
        </Box>
        <Box>
          <Text as="label">Service Description</Text>
          <TextArea
            placeholder="Service description goes here..."
            required={true}
            value={formData.description}
            onChange={setServiceDescription}
          ></TextArea>
        </Box>
        <Separator size="4" />
        <Text as="label">Form Fields</Text>
        {formData.fields.map((field, idx) => (
          <FieldEditor
            key={idx}
            field={field}
            onChange={setFormField(idx)}
            onMoveUp={moveFieldUp(idx)}
            onMoveDown={moveFieldDown(idx)}
            onDelete={deleteField(idx)}
            onReplace={replaceField(idx)}
          />
        ))}
        <Button onClick={createTextField}>Create Text Field</Button>
        <Button onClick={createRadioField}>Create Radio Field</Button>
        <Button onClick={createCheckboxField}>Create Checkbox Field</Button>
        <Button onClick={onSubmit}>Create Service</Button>
      </Flex>
      <Dialog.Root open={showFormErrors}>
        <Dialog.Content>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Description size="2">
            The service form has the following errors. Please fix them.
          </Dialog.Description>
          <ul>
            {formErrors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <Button onClick={() => setShowFormErrors(false)}>OK</Button>
        </Dialog.Content>
      </Dialog.Root>
    </Box>
  );
}
