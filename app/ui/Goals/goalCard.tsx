
import { Card, Select, SelectItem } from '@tremor/react';
import { Goal } from '../../lib/definitions';



export default function GoalCard({ goal }: { goal: Goal }) {
  console.log(goal)

  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-3xl text-tremor-content dark:text-dark-tremor-content">{goal.goalname}</p>
      <p className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{goal.description}</p>
      <Select defaultValue={goal.iscompleted?.toString()}>
        <SelectItem value="false">In Progress</SelectItem>
        <SelectItem value="true">Done</SelectItem>
      </Select>
    </Card>
  );
}
