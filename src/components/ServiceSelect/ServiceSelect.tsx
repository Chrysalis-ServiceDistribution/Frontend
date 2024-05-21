import React from 'react';
import { Select } from '@radix-ui/themes';

type ServiceSelectProps = {
  services: string[];
  setServiceView: React.Dispatch<React.SetStateAction<string>>;
};

const ServiceSelect: React.FC<ServiceSelectProps> = ({
  services,
  setServiceView,
}) => {
  return (
    <Select.Root
      defaultValue="Show All"
      onValueChange={(e: string) => {
        setServiceView(e);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="Show All">Show All</Select.Item>
          {services.map((service, index) => {
            return (
              <Select.Item key={index + 1} value={service}>
                {service}
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default ServiceSelect;
