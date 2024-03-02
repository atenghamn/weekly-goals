
import { Card, Select, SelectItem } from '@tremor/react';
import { Goal } from '../../lib/definitions';



export default function GoalCard({ goal }: { goal: Goal }) {
  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor="indigo"
    >
      <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">{goal.GoalName}</p>
      <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">{goal.Description}</p>
      <Select defaultValue={goal.IsCompleted?.toString()}>
        <SelectItem value="false">In Progress</SelectItem>
        <SelectItem value="true">Done</SelectItem>
      </Select>
    </Card>
  );
}
