
import GoalCard from './goalCard';
import { Goal } from '../../lib/definitions';
import clsx from 'clsx';
  
  export default function GoalsCardCollection({ goals }: { goals: Goal[] }) {
    return (
      <section className={clsx("flex", "flex-wrap", "justify-between")}>
        {goals.map((goal) => <GoalCard key={goal.goalid} goal={goal} />)}     
      </section>  
    );
  };
