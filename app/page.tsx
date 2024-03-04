import { Card, Title } from '@tremor/react';
import GoalsCardCollection from './ui/Goals/goalCardCollection';
import { fetchWeeklyGoals } from './lib/data';
import { revalidatePath } from 'next/cache';

export default async function IndexPage() {
  
  const weeklyGoals = await fetchWeeklyGoals();
  if (weeklyGoals.length !== 0) {
    revalidatePath('/')
  }

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Weekly goals</Title>
      <Card className="mt-6">
        <GoalsCardCollection goals={weeklyGoals} />
      </Card>
    </main>
  );
}
