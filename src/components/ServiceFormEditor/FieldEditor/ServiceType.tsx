import {
  CheckboxIcon,
  RadiobuttonIcon,
  TextAlignLeftIcon,
} from '@radix-ui/react-icons';
import { Flex } from '@radix-ui/themes';

export default function ServiceType(props: { type: string }) {
  let elem: React.ReactNode;
  switch (props.type) {
    case 'text':
      elem = (
        <>
          <TextAlignLeftIcon />
          Text
        </>
      );
      break;
    case 'radio':
      elem = (
        <>
          <RadiobuttonIcon />
          Radio
        </>
      );
      break;
    case 'checkbox':
      elem = (
        <>
          <CheckboxIcon />
          Checkbox
        </>
      );
      break;
    default:
      elem = <>{props.type}</>;
      break;
  }

  return (
    <Flex align="center" gap="1">
      {elem}
    </Flex>
  );
}
