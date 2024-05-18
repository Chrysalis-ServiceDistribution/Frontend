import ServiceCreationForm from '../../components/ServiceFormEditor/ServiceFormEditor';
import { CreateServiceFormData } from '../../components/ServiceFormEditor/formField';

export default function CreateService() {
  function onCommit(serviceForm: CreateServiceFormData) {
    console.log(serviceForm);
  }
  return <ServiceCreationForm onCommit={onCommit} />;
}
