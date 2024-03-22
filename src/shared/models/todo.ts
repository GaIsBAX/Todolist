export type Todo = {
  id: string;
  title: string;
  description: string;
  date: number;
  status: "completed" | "pending" | "overdue";
};
