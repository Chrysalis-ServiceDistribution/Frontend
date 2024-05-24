import { Grid, Flex, Heading, Separator, Button } from '@radix-ui/themes';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Service } from '../../classes/service/service';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { getUserServices } from '../../services/apiServices';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

export default function UserServices() {
  const { userID } = useParams();
  const { loggedInUserID } = useContext(AuthContext);
  const [services, setServices] = useState<Service[] | null>(null);

  useEffect(() => {
    const runner = async () => {
      const services = await getUserServices(Number(userID));
      setServices(services);
    };
    runner();
  }, [userID]);

  return (
    <Flex p="3" gap="3" direction="column" align='centerx`'>
      <Heading as="h2" size="4">
        Services
      </Heading>
      {
        (userID !== null && Number(userID) === loggedInUserID) &&
        (
          <Link to={`/${userID}/services/create`}>
            <Button>Create Service</Button>
          </Link>
        )
      }
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
