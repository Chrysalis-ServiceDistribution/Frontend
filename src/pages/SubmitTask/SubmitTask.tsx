import { Text, Box, Flex, Heading, Separator } from '@radix-ui/themes';
import { Service } from '../../classes/service/service';
import dummyServices from '../../pages/UserServices/services';
import { useParams } from 'react-router';
import SubmitTaskForm from '../../components/SubmitTaskForm/SubmitTaskForm';

export default function SubmitTask() {
  const { userID } = useParams();
  const service: Service = dummyServices[0];

  return <SubmitTaskForm />;
}
