import { LineChart, Card, Title, Text } from "@tremor/react";
import { fetchGoalFullfillment } from "../lib/data";



export default function GoalFullfillmentChart() {


    // convert the raw data so it is divided into -date, -completedGoals and -total goals

    var rawData = fetchGoalFullfillment();

    const dataFormatter = (number: number) =>
    `$${Intl.NumberFormat('sv').format(number).toString()}`;
  
    return (
        <Card className="mt-8">
            <Title>Goal fullfilment</Title>
            <Text>Overview of goals completed for each week</Text>
            {/* <LineChart
                className="h-80"
                data={chartdata}
                index="date"
                categories={['Goals', 'Fullfilled goals']}
                colors={['indigo', 'rose']}
                valueFormatter={dataFormatter}
                yAxisWidth={60}
                onValueChange={(v) => console.log(v)}
            /> */}

        </Card>
    );
}