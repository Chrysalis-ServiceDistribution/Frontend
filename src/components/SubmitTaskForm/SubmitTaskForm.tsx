import { Text, Box, Flex, Heading, Separator, Button } from '@radix-ui/themes';
import {
  RequestField,
  Service,
  createDefaultField,
} from '../../classes/service/service';
import { useNavigate, useParams } from 'react-router';
import TaskFieldEditor from './TaskFieldEditor/TaskFieldEditor';
import { useEffect, useState } from 'react';
import { createTask, getUserServiceById } from '../../services/apiServices';
import { Link } from 'react-router-dom';

export default function SubmitTaskForm() {
  const { userID, servID } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [filledFields, setFilledFields] = useState(
    service?.fields.map((field) => createDefaultField(field)),
  );
  const navigate = useNavigate();

  useEffect(() => {
    const runner = async () => {
      if (userID === undefined || servID === undefined) {
        return;
      }
      const service = await getUserServiceById(Number(servID));
      setService(service);
      setFilledFields(service.fields.map((field) => createDefaultField(field)));
    };
    runner();
  }, [userID, servID]);

  if (service === null) return <></>;

  function updateField(idx: number) {
    return (req: RequestField) => {
      setFilledFields((prevFields) =>
        prevFields?.map((f, i) => (i === idx ? req : f)),
      );
    };
  }

  async function commit() {
    if (servID === undefined || filledFields === undefined) {
      return;
    }
    await createTask(Number(servID), filledFields);
    navigate(`/${userID}/services/${servID}`)
  }

  return (
    <Flex p="3" gap="3" direction="column">
      <Heading>Submit Task</Heading>
      <Separator size="4" />
      <Box>
        <Heading as="h2" size="7">
          {service.name}
        </Heading>
        <Heading as="h4" size="3">
          {userID}
        </Heading>
        <Text as="p">{service.description}</Text>
      </Box>
      <Separator size="4" />
      {filledFields !== undefined &&
        service.fields.map((field, idx) => (
          <TaskFieldEditor
            key={idx}
            field={field}
            currentRequestField={filledFields[idx]}
            onUpdate={updateField(idx)}
          />
        ))}
      <Flex gap="2">
        <Link to={`/${userID}/services/${servID}`}>
          <Button>Cancel</Button>
        </Link>
        <Button onClick={commit}>Submit Task</Button>
      </Flex>
    </Flex>
  );
}
