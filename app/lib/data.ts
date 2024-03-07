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
    DATE_TRUNC('week', TargetDate AT TIME ZONE 'CET') AS WeekStart,
    COUNT(*) AS GoalsCount
FROM
    Goals
GROUP BY
    WeekStart
ORDER BY
    WeekStart;
    `;
    console.log(rows);
    return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Goals data.');
  }
}
