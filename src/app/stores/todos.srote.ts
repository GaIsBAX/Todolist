import { v1 } from "uuid";
import { Todo } from "./../../shared/models/todo";
import { create } from "zustand";

type State = {
  todos: Todo[];
  addTodo: (title: string) => void;
  editTodo: (id: string) => void;
  //   updateStatus: () => void;
  //   removeTodo: (id: string) => void;
};

export const useTodosStore = create<State>()((set, get) => ({
  todos: [
    {
      id: v1(),
      title: "Title",
      description: "describe ToDo",
      date: new Date(),
      status: "overdue",
    },
  ],
  addTodo: (title: string) => {
    const { todos } = get();
    const newToDo: Todo = {
      id: v1(),
      title,
      description:"describe ToDo",
      date: new Date(),
      status: "overdue",
    };

    set({
      todos: [newToDo].concat(todos),
    });
  },

  editTodo: (id: string) => {},
}));
