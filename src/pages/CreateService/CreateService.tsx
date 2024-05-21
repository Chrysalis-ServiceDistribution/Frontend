import ServiceCreationForm from '../../components/ServiceFormEditor/ServiceFormEditor';
import { ServiceCreationFormData } from '../../classes/service/formField';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

export default function CreateService() {
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()

  if (!isLoggedIn || loggedInUserID === null) {
    navigate('/auth')
  }

  function onCommit(serviceForm: ServiceCreationFormData) {
    navigate(`/${loggedInUserID}/services/`)   
  }

  return <ServiceCreationForm onCommit={onCommit} />;
}
