import ServiceCreationForm from '../../components/formField/ServiceCreationForm';
import { CreateServiceFormData } from '../../components/formField/formField';

export default function CreateService() {
  function onCommit(serviceForm: CreateServiceFormData) {
    console.log(serviceForm);
  }
  return <ServiceCreationForm onCommit={onCommit} />;
}
