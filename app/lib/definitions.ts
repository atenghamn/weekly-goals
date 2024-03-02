export type User = {
    id: number;
    name: string;
    username: string;
    email: string;
  }
  
  export type Goal = {
    goalid: number;
    goalname: string;
    description: string;
    userid: number;
    targetdate: Date;
    iscompleted: boolean;
  }