import { useParams, Link, useNavigate } from 'react-router-dom';
import { Flex, Text } from '@radix-ui/themes';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useState } from 'react';
import { Service } from '../../classes/service/service';
import { getUserServices } from '../../services/apiServices';
import ServiceSelect from '../../components/ServiceSelect/ServiceSelect';
export default function Profile() {
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);
  const { userID } = useParams();
  const navigate = useNavigate();
  const [userServices, setUserServices] = useState<Service[]>([]);
  //? If the user is not logged in, redirect to the home page?

  useEffect(() => {
    // if (!isLoggedIn) {
    //   return navigate('/auth');
    // }
  }, [userID, isLoggedIn, loggedInUserID, navigate]);
  //If I am not this user
  if (Number(userID) !== loggedInUserID) {
    //Get user info/services
    getUserServices(Number(userID)).then((services) => {
      setUserServices(services);
      console.log(services);
    });

    return (
      <Flex direction='column' justify='center' align='center'>
        <Text size='3'>Viewing {userID}'s profile</Text>
        {
          //Show user services
          userServices.map((service) => {
            return (
              <ServiceSelect services={[service]} setService={() => {}} />
            );
          })
        }
      </Flex>
    )
  }
  else{
    return (
      <Flex direction="column" gap="1">
        <Text>Profile</Text>
        <Link to={`/${userID}/services`}>View your services</Link>
      </Flex>
    );
  }
}
