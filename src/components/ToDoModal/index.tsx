import React, { FC, useState } from "react";
import { Todo } from "../../shared/models/todo";
import classes from "./index.module.scss";
import { useTodosStore } from "../../app/stores";

interface Props extends Todo {
  setModal: React.Dispatch<boolean>;
  isOpenModal: boolean;
}

const TodoModal: FC<Props> = (props) => {
  const { id, title, description, date, status, setModal, isOpenModal } = props;
  const { removeTodo, editTodo } = useTodosStore();
  const [todoContent, setToDoContent] = useState({
    title,
    description,
    status,
  });

 

  const deleteToDo = () => {
    removeTodo(id);
    setModal(false);
  };

  const saveToDo = () => {
    const { title, description, status } = todoContent;

    editTodo({
      id,
      date,
      title,
      description,
      status,
    });
    setModal(false);
  };

  return (
    <dialog className={classes.modal} open={isOpenModal}>
      <div className={classes.modalName}>
        <input
          type="text"
          value={todoContent.title}
          onChange={({ target }) => {
            setToDoContent({ ...todoContent, title: target.value });
          }}
        />
        <input
          type="text"
          value={todoContent.description}
          onChange={({ target }) => {
            setToDoContent({ ...todoContent, description: target.value });
          }}
        />
      </div>

      <div className={classes.modalStatus}>
        <input
          id="completed"
          type="radio"
          checked={todoContent.status === "completed"}
          onChange={() =>
            setToDoContent({ ...todoContent, status: "completed" })
          }
        />
        <label htmlFor="completed">completed</label>

        <input
          id="overdue"
          type="radio"
          checked={todoContent.status === "overdue"}
          onChange={() => setToDoContent({ ...todoContent, status: "overdue" })}
        />
        <label htmlFor="overdue">overdue</label>

        <input
          id="pending"
          type="radio"
          checked={todoContent.status === "pending"}
          onChange={() => setToDoContent({ ...todoContent, status: "pending" })}
        />
        <label htmlFor="pending">pending</label>
      </div>

      <div className={classes.modalButtons}>
        <button onClick={deleteToDo}>Delete</button>
        <button onClick={saveToDo}>Save</button>
      </div>
    </dialog>
  );
};

export default TodoModal;
