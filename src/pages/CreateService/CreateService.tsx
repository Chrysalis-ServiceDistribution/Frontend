import ServiceCreationForm from '../../components/ServiceFormEditor/ServiceFormEditor';
import { ServiceForm } from '../../classes/service/formField';

export default function CreateService() {
  function onCommit(serviceForm: ServiceForm) {
    console.log(serviceForm);
  }
  return <ServiceCreationForm onCommit={onCommit} />;
}
