import * as Select from '@radix-ui/react-select';
import React from 'react';
import './ServiceSelect.css';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons';

type ServiceSelectProps = {
  services: string[];
  setServiceView: React.Dispatch<React.SetStateAction<string>>;
};

const ServiceSelect: React.FC<ServiceSelectProps> = ({
  services,
  setServiceView,
}) => {
  return (
    // Null should probably be error handeling
    <Select.Root
      onValueChange={(e: string) => {
        setServiceView(e);
      }}
    >
      <Select.Trigger className="SelectTrigger" aria-label="Food">
        <Select.Value placeholder="Select a service" />
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <SelectItem className="SelectItem" value="Show All">
                Show All
              </SelectItem>
              {services.map((service, index) => {
                return (
                  <SelectItem
                    key={index + 1}
                    value={service}
                    className="SelectItem"
                  >
                    {service}
                  </SelectItem>
                );
              })}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = React.forwardRef<
  HTMLDivElement,
  { className: string; children: string; value: string }
>((props, forwardRef) => {
  const { children, value, className } = props;
  return (
    <Select.Item className={className} value={value} ref={forwardRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default ServiceSelect;
