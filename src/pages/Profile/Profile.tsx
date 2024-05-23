import { useParams, useNavigate } from 'react-router-dom';
import { Flex, Text } from '@radix-ui/themes';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useState } from 'react';
import { Service } from '../../classes/service/service';
import { getUserInfo } from '../../services/apiServices';
import ServiceSelect from '../../components/ServiceSelect/ServiceSelect';
export default function Profile() {
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);
  const { userID } = useParams();
  const navigate = useNavigate();
  const [userServices, setUserServices] = useState<Service[]>([]);
  //? If the user is not logged in, redirect to the home page?
  const [userInfo, setUserInfo] = useState<{
    userID: number;
    user: string;
    profile: Record<string, string>;
    services: Service[];
  }>({ userID: 0, user: '', profile: {}, services: [] });
  useEffect(() => {
    getUserInfo(Number(userID)).then((userInfo) => {
      setUserInfo(userInfo);
      setUserServices(userInfo.services)
    });
  }, [userID, isLoggedIn, loggedInUserID, navigate]);
  //If I am not this user
  if (Number(userID) !== loggedInUserID) {
    //Get user info/services

    return (
      <Flex direction="column" justify="center" align="center">
        <Text size="3">Viewing {userInfo.user}'s profile</Text>
        {
          //Show user services
          userServices.map((service) => {
            return <ServiceSelect services={[service]} setService={() => {}} />;
          })
        }
      </Flex>
    );
  } else {
    return (
      <>
      {navigate(`/${userID}/services`)}
      </>
    );
  }
}
