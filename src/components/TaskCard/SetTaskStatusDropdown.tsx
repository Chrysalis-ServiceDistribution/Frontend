import { Select } from '@radix-ui/themes';
import { TaskStatuses, TaskStatus } from '../../classes/service/service';
import StatusTab from '../StatusTab/StatusTab';

export default function SetTaskStatusDropdown(props: {
  status: TaskStatus;
  onSelect: (type: TaskStatus) => void;
}) {
  return (
    <Select.Root value={props.status} onValueChange={props.onSelect}>
      <Select.Trigger />
      <Select.Content>
        {TaskStatuses.map((type, idx) => (
          <Select.Item key={idx} value={type}>
            <StatusTab status={type} />
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
}
