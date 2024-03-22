import React from "react";

const TodoModal = ({ children, open }: any) => {
  return <dialog open={open}>{children}</dialog>;
};

export default TodoModal;
