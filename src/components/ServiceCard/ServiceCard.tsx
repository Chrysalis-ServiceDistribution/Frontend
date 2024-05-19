import './ServiceCard.css'
import { Card, Flex, Heading, Inset, Box, Theme } from "@radix-ui/themes";
import { Service, Task } from "../../classes/service/service";
import { useMemo } from "react";

const taskColors = {
  "pending": "gray" as const,
  "approved": "blue" as const,
  "rejected": "red" as const,
  "inProgress": "yellow" as const,
  "done": "green" as const,
}

export default function ServiceCard(props: {
  service: Service
}) {
  const sortedTasks = useMemo(() => {
    const sorted: {
      pending: Task[],
      approved: Task[],
      inProgress: Task[],
      done: Task[],
      rejected: Task[],
    } = {
      pending: [],
      approved: [],
      inProgress: [],
      done: [],
      rejected: [],
    }

    for (const task of props.service.tasks) {
      switch(task.status) {
        case "pending":
          sorted.pending.push(task);
          break;
        case "accepted":
          sorted.approved.push(task); 
          break;
        case "in progress":
          sorted.inProgress.push(task); 
          break;
        case "rejected":
          sorted.rejected.push(task); 
          break;
        case "done":
          sorted.done.push(task); 
          break;
      }
    }

    return sorted
  }, [props.service.tasks])

  const taskCounts = useMemo(() => {
    const res: { type: "pending" | "approved" | "inProgress" | "done" |
    "rejected", count: number }[] = []
    for (const tag of [
      "pending", "approved", "inProgress", "done", "rejected"
    ] as const) {
      if (sortedTasks[tag].length > 0) {
        res.push({
          type: tag,
          count: sortedTasks[tag].length
        });
      }

    }
    return res;
  }, [sortedTasks]);

  console.log(taskCounts)

  return (
    <Card>
      <Flex direction="column" gap="3">
        <Heading as="h3" size="3">
          {props.service.name}
        </Heading>
        <Inset clip="padding-box" side="bottom" pb="0">
          <Flex>
            {taskCounts?.map((taskCount, idx) => (
              <Theme asChild={true} key={idx} accentColor={taskColors[taskCount.type]}>
                <Box className="task-count">{taskCount.count}</Box>
              </Theme>
            ))}
          </Flex>
        </Inset>
      </Flex>
    </Card>
  )
}
