import React from 'react';
import { Select } from '@radix-ui/themes';
import { Service } from '../../classes/service/service';

type ServiceSelectProps = {
  services: Service[];
  setService: (sel: number | null) => void;
};

const ServiceSelect: React.FC<ServiceSelectProps> = ({
  services,
  setService,
}) => {
  return (
    <Select.Root
      defaultValue="Show All"
      onValueChange={() => {
        setService(null);
      }}
    >
      <Select.Trigger />
      <Select.Content>
        <Select.Group>
          <Select.Item value="Show All">Show All</Select.Item>
          {services.map((service, index) => {
            return (
              <Select.Item key={index} value={`${index}`}>
                {service.name}
              </Select.Item>
            );
          })}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default ServiceSelect;
