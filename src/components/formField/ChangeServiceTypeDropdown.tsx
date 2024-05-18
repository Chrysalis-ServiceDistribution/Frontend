import { Select } from '@radix-ui/themes';
import { FormFieldType, formFieldTypes } from './formField';
import ServiceType from './ServiceType';

export default function ChangeServiceTypeDropdown(props: {
  field: FormFieldType;
  onSelect: (type: string) => void;
}) {
  return (
    <Select.Root value={props.field.type} onValueChange={props.onSelect}>
      <Select.Trigger className="change-service-type"></Select.Trigger>
      <Select.Content>
        {formFieldTypes.map((type, idx) => (
          <Select.Item key={idx} value={type}>
            <ServiceType type={type} />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
