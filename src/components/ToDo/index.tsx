import { FC, useState } from "react";
import classes from "./index.module.scss";
import { useTodosStore } from "../../app/stores";
import { Todo } from "../../shared/models/todo";
import { todoFormatDate } from "../../shared/utils";
import TodoModal from "../ToDoModal";

const ToDo: FC<Todo> = (props) => {
  const { id, title, description, date, status } = props;
  const [modal, setModal] = useState(false);

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

          <TodoModal {...props} setModal={setModal}  isOpenModal={modal}/>
          
        </div>
      </div>
    </div>
  );
};

export default ToDo;
