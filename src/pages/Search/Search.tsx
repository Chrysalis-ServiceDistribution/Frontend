import { TextField, Flex, ScrollArea, Box} from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Service } from '../../classes/service/service';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useState, useEffect, useContext } from 'react';
import { getAllServices } from '../../services/apiServices';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
export default function Search() {
  const { loggedInUserID } = useContext(AuthContext);
  const [services, setServices] = useState<Service[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  useEffect(() => {
    const runner = async () => {
      const services = await getAllServices();
      setServices(services);
    };
    runner();
  }, []);

  const handelSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery((e.target as HTMLInputElement).value);
  };

  return (
    <Flex justify="center" align="center" direction="column" gap="5">
      <TextField.Root
        placeholder="Search the docs…"
        onInput={(e) => handelSearchChange(e)}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>
      <ScrollArea type="always" scrollbars="vertical" style={{ height : 750 }}>
        <Box>
          <Flex direction="column" gap="4" justify="center">
            {services
              .filter((service) => service.user.id !== loggedInUserID)
              .filter((service) =>
                service.name.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((service, index) => (
                <Link to={`/${service.user.id}/services`} key={index}>
                  <ServiceCard service={service} />
                </Link>
              ))}
          </Flex>
        </Box>
      </ScrollArea>
    </Flex>
  );
}
