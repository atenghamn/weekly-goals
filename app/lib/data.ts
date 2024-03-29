import { sql } from '@vercel/postgres';
import { Goal } from './definitions';
import { revalidatePath } from 'next/cache';

export async function fetchAllGoals() {
  try {
    const data = await sql<Goal>`SELECT * FROM Goals`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Goals data.');
  }
}

export async function fetchWeeklyGoals() {
  try {
    const { rows } = await sql<Goal>`
SELECT *
FROM Goals
WHERE TargetDate BETWEEN DATE_TRUNC('week', CURRENT_DATE AT TIME ZONE 'CET') AND 
(DATE_TRUNC('week', CURRENT_DATE AT TIME ZONE 'CET') + interval '6 days');
`;

    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Goals data.');
  }
}

export async function fetchGoalFullfillment() {
  try {
    const { rows } = await sql<Goal>`
    SELECT
    EXTRACT(YEAR FROM TargetDate AT TIME ZONE 'CET') AS Year,
    EXTRACT(WEEK FROM TargetDate AT TIME ZONE 'CET') AS WeekNumber,
    COUNT(*) AS GoalsCount, -- Count of all goals
    COUNT(*) FILTER (WHERE IsCompleted = true) AS CompletedGoals
FROM
    Goals
GROUP BY
    Year,
    WeekNumber
ORDER BY
    Year,
    WeekNumber;
    `;
    console.log('Rows:', rows);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Goals data.');
  }
}
