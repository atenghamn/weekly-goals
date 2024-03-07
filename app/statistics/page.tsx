'use client';

import { Grid } from '@tremor/react';
import LineChart from './lineChart';



export default function PlaygroundPage() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
       
      </Grid>
      <LineChart />
    </main>
  );
}
