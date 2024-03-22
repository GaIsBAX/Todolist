import { FC, useState } from "react";
import classes from "./index.module.scss";
import { useTodosStore } from "../../app/stores";
import { Todo } from "../../shared/models/todo";
import { todoFormatDate } from "../../shared/utils";
import TodoModal from "../ToDoModal";

const ToDo: FC<Todo> = (props) => {
  const { id, title, description, date, status } = props;
  const [modal, setModal] = useState(false);
  const { editTodo } = useTodosStore();

  const openModal = () => {
    setModal(true);
  };

  return (
    <div className={classes.Todo}>
      <div className={classes.TodoName}>
        <h3 className={classes.TodoTitle}>{title}</h3>
        <h4 className={classes.TodoDescription}>{description}</h4>
      </div>
      <div className={classes.TodoInfoInfo}>
        <div className={classes.TodoInfo}>
          <p className={classes.TodoStatus}>{status}</p>
          <p className={classes.TodoDate}>{todoFormatDate(date)}</p>
        </div>
        <div className={classes.TodoEdit}>
          <button className={classes.TodoButton} onClick={openModal} />

          <TodoModal open={modal}>
            <h3>hello from modal</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Necessitatibus, mollitia nesciunt! Mollitia in adipisci aliquam.
              Vero, aliquid fugit blanditiis ex sapiente dolorum voluptatibus,
              culpa quibusdam laudantium assumenda porro, incidunt vitae.
            </p>
          </TodoModal>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
