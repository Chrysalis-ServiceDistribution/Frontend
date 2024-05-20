import ServiceCreationForm from '../../components/ServiceFormEditor/ServiceFormEditor';
import { ServiceCreationFormData } from '../../classes/service/formField';

export default function CreateService() {
  function onCommit(serviceForm: ServiceCreationFormData) {
    console.log(serviceForm);
  }
  return <ServiceCreationForm onCommit={onCommit} />;
}
