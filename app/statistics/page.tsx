import { Grid } from '@tremor/react';
import LineChart from './lineChart';
import { fetchGoalFullfillment } from '../lib/data';

export default async function PlaygroundPage() {

  const rawData = await fetchGoalFullfillment();
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
        <LineChart model={rawData} />
      </Grid>
    </main>
  );
}
