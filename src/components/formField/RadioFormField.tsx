import { Flex, TextField, Button } from '@radix-ui/themes';
import { RadioField, FormFieldType } from './formField';
import React from 'react';
import NoOutlineIconButton from './NoOutlineIconButton';
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons';

export default function RadioFormField(props: {
  field: RadioField;
  onChange: (field: FormFieldType) => void | undefined;
}) {
  function editChoice(index: number) {
    return (evt: React.ChangeEvent<HTMLInputElement>) => {
      const newChoices = [...props.field.choices];
      newChoices.splice(index, 1, evt.currentTarget.value);
      const newField = new RadioField(props.field.prompt, newChoices);
      props.onChange(newField);
    };
  }

  function newChoice() {
    const newChoices = [
      ...props.field.choices,
      `Choice ${props.field.choices.length + 1}`,
    ];

    const newField = new RadioField(props.field.prompt, newChoices);
    props.onChange(newField);
  }

  function deleteChoice(index: number) {
    return () => {
      // If there is only one choice, do not delete it
      if (props.field.choices.length === 1) {
        return;
      }
      const newChoices = [...props.field.choices];
      newChoices.splice(index, 1);
      const newField = new RadioField(props.field.prompt, newChoices);
      props.onChange(newField);
    };
  }

  return (
    <Flex direction="column" gap="2">
      {props.field.choices.map((choice, idx) => {
        return (
          <Flex gap="2" align="center">
            <NoOutlineIconButton onClick={deleteChoice(idx)}>
              <Cross1Icon />
            </NoOutlineIconButton>
            <TextField.Root
              placeholder="Choice text..."
              value={choice}
              onChange={editChoice(idx)}
            ></TextField.Root>
          </Flex>
        );
      })}
      <Button onClick={newChoice}>
        <PlusIcon />
        Add new choice
      </Button>
    </Flex>
  );
}
