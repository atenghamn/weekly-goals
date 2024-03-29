"use client";
import { LineChart, Card, Title, Text } from "@tremor/react";
import { fetchGoalFullfillment } from "../lib/data";
import { useEffect, useState } from "react";
import { Goal } from "../lib/definitions";

export default async function GoalFullfillmentChart() {
    const [rawData, setRawData] = useState<Goal[]>();

    useEffect(() => {
        async function loadData() {
            const data = await fetchGoalFullfillment();
            console.log('Load data', data);
            setRawData(data);
        }

        loadData();
    }, []);

    if (!rawData) {
        return <div>Loading...</div>;
    }

return (
    <>
    <Card className="mt-8">
        <Title>Goal fullfilment</Title>
        <Text>Overview of goals completed for each week</Text>
        <LineChart
            className="h-80"
            data={rawData}
            index="weeknumber"
            categories={['goalscount', 'completedgoals']}
            colors={['indigo', 'rose']}
            yAxisWidth={30}
        />

    </Card>
    </>
);
}