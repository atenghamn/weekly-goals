import { Button, Card, Title } from '@tremor/react';
import GoalsCardCollection from './ui/Goals/goalCardCollection';
import { fetchWeeklyGoals } from './lib/data';

export default async function IndexPage() {
  
  const weeklyGoals = await fetchWeeklyGoals();

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Weekly goals</Title>
      <Card className="mt-6">
        <GoalsCardCollection goals={weeklyGoals} />
      </Card>
    </main>
  );
}
