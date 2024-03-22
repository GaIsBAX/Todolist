import { v1 } from "uuid";
import { Todo } from "./../../shared/models/todo";
import { create } from "zustand";

type State = {
  todos: Todo[];
  addTodo: (title: string, description: string) => void;
  //   editTodo: () => void;
  //   updateStatus: () => void;
  //   removeTodo: (id: string) => void;
};

export const useTodosStore = create<State>()((set, get) => ({
  todos: [
    {
      id: v1(),
      title: "fdsa",
      description: "adsada",
      date: Date.now(),
      status: "overdue",
    },
  ],
  addTodo: (title: string, description: string) => {
    const { todos } = get();
    const newToDo: Todo = {
      id: v1(),
      title,
      description,
      date: Date.now(),
      status: "pending",
    };

    set({
      todos: [newToDo].concat(todos),
    });
  },
}));
