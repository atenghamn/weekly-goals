import { Card, Title } from '@tremor/react';
import GoalsCardCollection from './ui/Goals/goalCardCollection';
import { fetchWeeklyGoals } from './lib/data';
import { auth } from './ui/auth';

export default async function IndexPage() {
  
  const session = await auth();

  if (!session) {
    return <p>You must be logged in</p>;
  }
  
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
