import * as Select from '@radix-ui/react-select';
import React from 'react';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons';


type ServiceSelectProps = {
  services: string[];
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({services}) => {
  console.log(services);
  
  return (
    <>
      <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label="Food">
          <Select.Value placeholder="Filter by Service" />
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
                <Select.Label className="SelectLabel">Services</Select.Label>
                {
                  services.map((service: string) => {
                    return (
                      <SelectItem value={service}>{service}</SelectItem>
                    )
                  })
                }
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
};

const SelectItem = React.forwardRef<HTMLDivElement, { children: React.ReactNode, className?: string, value: string }>((props, forwardedRef) => {
  const { children, className, ...rest } = props;
  return (
    <Select.Item className={classnames('SelectItem', className)} {...rest} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default ServiceSelect;