import { IconButton, Flex, Text } from '@radix-ui/themes';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const location = useLocation();
  let dynamicText: string = '';

  useEffect(() => {}, [location.pathname]);

  if (location.pathname === '/search') {
    dynamicText = 'Search';
  } else if (location.pathname === '/') {
    dynamicText = 'Home';
  } else if (location.pathname === '/profile') {
    dynamicText = 'Profile';
  } else {
    dynamicText = 'Add me as an elseif statement for this page';
  }

  return (
    <Flex
      justify="between"
      gap="2"
      align="center"
      style={{ background: 'darkgrey' }}
    >
      <Flex gap="1">
        {/* Search */}
        <Link to="/search">
          <IconButton>
            <MagnifyingGlassIcon />
          </IconButton>
        </Link>
        {/* Home */}
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
      </Flex>
      {/* Where am I text */}
      <Text size="3">{dynamicText}</Text>
      {/* Profile */}
      <Link to="/profile">
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Link>
    </Flex>
  );
}
