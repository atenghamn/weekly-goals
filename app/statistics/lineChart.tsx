import { LineChart, Card, Title, Text } from "@tremor/react";
import { fetchGoalFullfillment } from "../lib/data";

export default async function GoalFullfillmentChart() {
    // convert the raw data so it is divided into -date, -completedGoals and -total goals
    var rawData = await fetchGoalFullfillment();
    console.log('RAW: ', rawData);

    const dataFormatter = (number: number) =>
        `$${Intl.NumberFormat('sv').format(number).toString()}`;

    const chartdata = (data: Array<{ WeekStart: string, GoalsCount: number, CompletedGoals: number }>) => {
        return data.map(({ WeekStart, GoalsCount, CompletedGoals }) => ({
            week: WeekStart,
            goals: dataFormatter(GoalsCount),
            completedGoals: dataFormatter
        }));
    };


return (
    <Card className="mt-8">
        <Title>Goal fullfilment</Title>
        <Text>Overview of goals completed for each week</Text>
        {/* <LineChart
            className="h-80"
            data={chartdata(raw)}
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