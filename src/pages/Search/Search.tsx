import { Box, Flex } from '@radix-ui/themes';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import { useEffect } from 'react';

export default function Search() {

  //get all services on pageload
  useEffect(() => {
    console.log('search');
  }
  , []);
  return(
    <Flex>
      <Box>Search</Box>
    </Flex>
  )
}