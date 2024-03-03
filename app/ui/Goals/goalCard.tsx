'use client'

import { Button, Card } from '@tremor/react';
import { Goal } from '../../lib/definitions';
import { updateGoal, deleteGoal } from '../../lib/actions';
import { redirect } from 'next/navigation';
import { Icon } from '@tremor/react';
import { TrashIcon } from '@heroicons/react/24/solid';
import { clsx } from 'clsx';

export default function GoalCard({ goal }: { goal: Goal }) {
  const handleMarkAsDone = async () => {
    try {
      const status = !goal.iscompleted;
      await updateGoal(status, goal.goalid);
      redirect('/');
    } catch (error) {
      console.error('Failed to update goal:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteGoal(goal.goalid);
      redirect('/');
    } catch (error) {
      console.error('Failed to update goal:', error);
    }
  };

  return (
    <Card
      className="mx-auto max-w-xs"
      decoration="top"
      decorationColor={goal.iscompleted ? "emerald" : "indigo"}
    >
      <p className={clsx(
        "text-3xl",
        "text-tremor-content",
        "dark:text-dark-tremor-content"
      )}>{goal.goalname}</p>
      <p className={clsx(
        "text-tremor-content-strong",
        "dark:text-dark-tremor-content-strong",
        "font-semibold"
      )}>{goal.description}</p>
      <div className={clsx(
        "flex",
        "justify-between",
      )}>
        <Button variant='primary' color='emerald' onClick={handleMarkAsDone}>Done</Button>
        <Button onClick={handleDelete} color="slate">
          <Icon icon={TrashIcon} color='rose' size="sm" />
        </Button>
      </div>
    </Card>
  );
}
