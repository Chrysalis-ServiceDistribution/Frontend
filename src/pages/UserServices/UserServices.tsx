import * as dummyServices from './services.json'
import { Flex, Heading, Separator } from "@radix-ui/themes"
import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { CheckboxField, FormFieldType, RadioField, TextField } from '../../classes/service/formField'

export type FilledTextField = {
  type: 'text',
  value: string,
}

export type FilledRadioField = {
  type: 'radio',
  selection: number,
}

export type FilledCheckboxField = {
  type: 'checkbox',
  selection: number[],
}

type RequestField = FilledRadioField | FilledCheckboxField | FilledTextField

interface Task {
  client: string,
  status: string,
  requestFields: RequestField[],
}

interface Service {
  name: string,
  description: string,
  fields: FormFieldType[],
  tasks: Task[],
}

export default function UserServices() {
  const { userID } = useParams()
  const [services, setServices] = useState<Service[] | null>(null)

  useEffect(() => {
    setServices(dummyServices.map((service) => ({
      name: service.name,
      description: service.description,
      fields: service.fields.map((field) => {
        switch(field.type) {
          case 'text':
            return new TextField(field.prompt)
          case 'radio':
            return new RadioField(field.prompt, field.choices || [])
          case 'checkbox':
            return new CheckboxField(field.prompt, field.choices || [])
          default:
            throw new Error('invalid field');
        }
      }),
      tasks: service.tasks.map((task) => ({
        client: task.client,
        status: task.status,
        requestFields: task.requestFields.map((field) => {
          switch(field.type) {
            case 'text':
              if (typeof field.value === 'undefined') {
                throw new Error('invalid text field');
              }
              return {
                type: 'text',
                value: field.value
              }
            case 'radio':
              if (typeof field.selection !== 'number') {
                throw new Error('invalid radio field');
              }
              return {
                type: 'radio',
                selection: field.selection
              }
            case 'checkbox':
            if (typeof field.selection !== 'object') {
              throw new Error('invalid checkbox field');
            }
              return {
                type: 'checkbox',
                selection: field.selection,
              }
            default:
              throw new Error('invalid field');
          }
        }),
      })),
    })));
  }, []);

  return (
    <Flex p="3" gap="3" direction="column">
      <Heading as="h1" size="7">{userID}</Heading>
      <Separator size="4" />
      <Heading as="h2" size="4">Services</Heading>
    </Flex>
  )
}
