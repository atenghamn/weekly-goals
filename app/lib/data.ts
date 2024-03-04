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

revalidatePath('/', 'layout');

return rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch Goals data.');
  }
}
