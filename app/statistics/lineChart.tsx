import { LineChart, Card, Title, Text } from "@tremor/react";
import { Goal } from "../lib/definitions";

export default function GoalFullfillmentChart({model}: {model: Goal[]}) {
return (
    <Card className="mt-8">
        <Title>Goal fullfilment</Title>
        <Text>Overview of goals completed for each week</Text>
        <LineChart
            className="h-80"
            data={model}
            index="weeknumber"
            categories={['goalscount', 'completedgoals']}
            colors={['indigo', 'rose']}
            yAxisWidth={30}
        />
    </Card>
);
}