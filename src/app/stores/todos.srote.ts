import { v1 } from "uuid";
import { Todo } from "./../../shared/models/todo";
import { create } from "zustand";

type State = {
  todos: Todo[];
  addTodo: (title: string) => void;
  getTodoById: (id: string) => Todo;
  editTodo: (Todo: Todo) => void;
  //   updateStatus: () => void;
  removeTodo: (id: string) => void;
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

  getTodoById: (id: string) => {
    const { todos } = get();
    return todos.find((todo) => todo.id === id)!;
  },

  addTodo: (title: string) => {
    const { todos } = get();
    const newToDo: Todo = {
      id: v1(),
      title,
      description: "describe ToDo",
      date: new Date(),
      status: "overdue",
    };

    set({
      todos: [newToDo].concat(todos),
    });
  },

  editTodo: (todo) => {
    const { todos } = get();
    const indexToDo = todos.indexOf(todo);
    todos.splice(indexToDo, 1, todo);

    set({
      todos,
    });
  },

  removeTodo: (id: string) => {
    const { todos } = get();
    set({
      todos: todos.filter((todo) => todo.id !== id),
    });
  },
}));
