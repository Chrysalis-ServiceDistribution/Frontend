import { Flex } from "@radix-ui/themes";
import { TaskStatus } from "../../classes/service/service";
import { CheckIcon, ClockIcon, Cross1Icon, EnvelopeClosedIcon, RocketIcon } from '@radix-ui/react-icons';

export default function StatusTab(props: {
  status: TaskStatus
}) {
  switch(props.status) {
    case "pending":
      return (
        <Flex gap="3" align="center"><EnvelopeClosedIcon /> Pending</Flex>
      )
    case "accepted":
      return (
        <Flex gap="3" align="center"><ClockIcon /> Accepted</Flex>
      )
    case "inProgress":
      return (
        <Flex gap="3" align="center"><RocketIcon /> In Progress</Flex>
      )
    case "rejected":
      return (
        <Flex gap="3" align="center"><Cross1Icon /> Rejected</Flex>
      )
    case "done":
      return (
        <Flex gap="3" align="center"><CheckIcon /> Done</Flex>
      )
  }
}
