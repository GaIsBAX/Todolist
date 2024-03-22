export type Todo = {
  id: string;
  title: string;
  description: string;
  date: Date;
  status: "completed" | "pending" | "overdue";
};
