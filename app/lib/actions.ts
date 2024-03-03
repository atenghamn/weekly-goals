'use server';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
  title: z.string(),
  description: z.string()
});

const SetGoal = FormSchema.omit({});

export async function setGoal(formData: FormData) {
  const { title, description } = SetGoal.parse({
    title: formData.get('title'),
    description: formData.get('description'),
  });
  const date = new Date().toISOString().split('T')[0];

  await sql`
      INSERT INTO Goals (GoalName, Description, UserId, TargetDate)
      VALUES (${title}, ${description}, 1, ${date})
    `;

    redirect('/');
}

export async function updateGoal(isDone: boolean, id: number) {
  await sql`
  UPDATE Goals
  SET IsCompleted = ${isDone}
  WHERE GoalId = ${id};
  `;
  redirect('/');
}

export async function deleteGoal(id: number) {
  await sql`DELETE FROM Goals WHERE GoalId = ${id}`;
  redirect('/');
}
