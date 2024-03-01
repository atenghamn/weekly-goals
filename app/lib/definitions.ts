export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
  export type Goal = {
    GoalId: number;
    GoalName: string;
    Description: string;
    UserID: number;
    TargetDate: Date;
    IsCompleted: boolean;
  }