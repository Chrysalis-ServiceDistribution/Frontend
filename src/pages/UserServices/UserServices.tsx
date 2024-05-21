import dummyServices from './services';
import { Grid, Flex, Heading, Separator } from '@radix-ui/themes';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Service } from '../../classes/service/service';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { getUserServices } from '../../services/apiServices';
import { Link } from 'react-router-dom';

export default function UserServices() {
  const { userID } = useParams();
  const [services, setServices] = useState<Service[] | null>(null);

  useEffect(() => {
    const runner = async () => {
      const services = await getUserServices(Number(userID));
      setServices(services);
    };
    runner();
  }, [userID]);

  return (
    <Flex p="3" gap="3" direction="column">
      <Heading as="h1" size="7">
        {userID}
      </Heading>
      <Separator size="4" />
      <Heading as="h2" size="4">
        Services
      </Heading>
      <Grid gap="3" columns="3">
        {services?.map((service, idx) => (
          <Link key={idx} to={`/${userID}/services/${service.id}`}>
            <ServiceCard service={service} />
          </Link>
        ))}
      </Grid>
    </Flex>
  );
}
