import { IconButton, Flex, Text } from '@radix-ui/themes';
import {
  HomeIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from '@radix-ui/react-icons';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function Navbar() {
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);
  const { userID } = useParams();
  const location = useLocation();
  let dynamicText: string = '';

  useEffect(() => {}, [location.pathname]);

  if (location.pathname === '/search') {
    dynamicText = 'Search';
  } else if (location.pathname === '/') {
    dynamicText = 'Home';
  } else if (location.pathname === `/${userID}`) {
    dynamicText = 'Profile Page';
  } else {
    dynamicText = 'Add me as an elseif statement for this page';
  } 

  if (location.pathname === '/auth') {
    return null;
  }

  return (
    <Flex
      justify="between"
      gap="2"
      align="center"
      style={{
        padding: '1rem',
        borderBottom: '1px solid rgba(255,255,255, .8)',
      }}
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
      <Link to={`/${loggedInUserID}`}>
        <IconButton>
          <PersonIcon />
        </IconButton>
      </Link>
    </Flex>
  );
}
