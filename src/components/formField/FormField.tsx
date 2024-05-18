import {
  Flex,
  Card,
  Text,
  TextField as RadixTextField,
  ChevronDownIcon,
} from '@radix-ui/themes';
import NoOutlineIconButton from './NoOutlineIconButton';
import CheckboxFormField from './CheckboxFormField';
import RadioFormField from './RadioFormField';
import TextFormField from './TextFormField';
import { FormFieldType } from './formField';
import { ChevronUpIcon, Cross1Icon } from '@radix-ui/react-icons';
import ChangeServiceTypeDropdown from './ChangeServiceTypeDropdown';

export default function FormField(props: {
  field: FormFieldType;
  onChange: (field: FormFieldType) => void | undefined;
  onMoveUp: () => void | undefined;
  onMoveDown: () => void | undefined;
  onDelete: () => void | undefined;
  onReplace: (type: string) => void;
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

  function onPromptChange(evt: React.ChangeEvent<HTMLInputElement>) {
    props.onChange({
      ...props.field,
      prompt: evt.target.value,
    });
  }

  return (
    <Card style={{ position: 'relative' }}>
      <Flex gap="3">
        <Flex direction="column" justify="center" align="center" gap="2">
          <NoOutlineIconButton onClick={props.onMoveUp}>
            <ChevronUpIcon />
          </NoOutlineIconButton>
          <NoOutlineIconButton onClick={props.onDelete}>
            <Cross1Icon />
          </NoOutlineIconButton>
          <NoOutlineIconButton onClick={props.onMoveDown}>
            <ChevronDownIcon />
          </NoOutlineIconButton>
        </Flex>
        <Flex direction="column">
          <ChangeServiceTypeDropdown
            field={props.field}
            onSelect={props.onReplace}
          />
          <Text as="p" size="4">
            Prompt
          </Text>
          <RadixTextField.Root
            placeholder="Type prompt message..."
            required={true}
            onChange={onPromptChange}
            value={props.field.prompt}
          ></RadixTextField.Root>
          {theField}
        </Flex>
      </Flex>
    </Card>
  );
}
