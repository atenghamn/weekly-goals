import Link from 'next/link';
import { Button } from '../button';
import { setGoal } from '../../lib/actions';

export default function Form() {
  return (
    <form action={setGoal}>
      <div className="mx-auto max-w-sm space-y-8 rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Set Weekly Goal
          </label>
        </div>
        <div>
          <input 
          id="title"
          name="title"
          placeholder="Title" />
        </div>
        <div>
          <input 
          id="description"
          name='description'
          placeholder="Description" />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
          >
            Cancel
          </Link>
          <Button type="submit">Set Goal</Button>
        </div>
      </div>
    </form>
  );
}
