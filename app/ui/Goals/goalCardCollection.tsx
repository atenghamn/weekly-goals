
import GoalCard from './goalCard';
import { Goal } from '../../lib/definitions';
  
  export default function GoalsCardCollection({ goals }: { goals: Goal[] }) {
    console.log(goals)
    return (
      <section>
        {goals.map((goal) => <GoalCard key={goal.GoalId} goal={goal} />)}     
      </section>  
    );
  };
