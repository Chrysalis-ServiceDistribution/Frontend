import { TextField, Flex } from '@radix-ui/themes';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Service, Task } from '../../classes/service/service';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useState, useEffect } from 'react';

export default function Search() {
  const [services, setServices] = useState([]);
  //get all services on pageload
  useEffect(() => {
    console.log('grabbing services on pageload');

  }, []);

  const handelSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log((e.target as HTMLInputElement).value);
  };
  return (
    <Flex justify='center' align='center' direction='column'>
      <TextField.Root
        placeholder="Search the docs…"
        onInput={(e) => handelSearchChange(e)}
      >
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      </TextField.Root>


    </Flex>
  );
}
