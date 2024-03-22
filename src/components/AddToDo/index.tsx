import classes from "./index.module.scss";
import React, { ChangeEvent, FC, useCallback, useState } from "react";

interface AddTodoProps {
  onAdd: (title: string) => void;
}

const AddTodo: FC<AddTodoProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const createTodo = useCallback(()=>{
    onAdd(value);
    setValue("");
  },[value])
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className={classes.addToDo}>
        <input
          type="text"
          className={classes.addToDoValue}
          placeholder="Create ToDo"
          value={value}
          onChange={onChangeHandler}
        />

        <button onClick={createTodo} className={classes.addToDoButton}>
          +
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
