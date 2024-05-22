import ServiceCreationForm from '../../components/ServiceFormEditor/ServiceFormEditor';
import { ServiceCreationFormData } from '../../classes/service/formField';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { createService } from '../../services/apiServices';

export default function CreateService() {
  const { loggedInUserID, isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate()

  if (!isLoggedIn || loggedInUserID === null) {
    return navigate('/auth')
  }

  async function onCommit(serviceForm: ServiceCreationFormData) {
    await createService(serviceForm); 
    navigate(`/${loggedInUserID}/services/`)   
  }

  return <ServiceCreationForm onCommit={onCommit} />;
}
