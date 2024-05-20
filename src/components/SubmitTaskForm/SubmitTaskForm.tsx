import { Text, Box, Flex, Heading, Separator } from '@radix-ui/themes'
import { Service, createFieldDefault } from '../../classes/service/service'
import dummyServices from '../../pages/UserServices/services'
import { useParams } from 'react-router';
import TaskFieldEditor from './TaskFieldEditor/TaskFieldEditor';
import { useState } from 'react';

export default function SubmitTaskForm() {
  const { userID } = useParams();
  const service: Service = dummyServices[0]
  const [filledFields, setFilledFields] = useState(service.fields.map((field) => createFieldDefault(field)));

  return (
    <Flex p="3" gap="3" direction="column">
      <Heading>Submit Task</Heading>
      <Separator size="4" />
      <Box>
        <Heading as="h2" size="7">{service.name}</Heading> 
        <Heading as="h4" size="3">{userID}</Heading>
        <Text as="p">{service.description}</Text>
      </Box>
      <Separator size="4" />
      {service.fields.map((field, idx) => (
        <TaskFieldEditor key={idx} field={field} currentRequestField={filledFields[idx]} />
      ))}
    </Flex>
  )
}
