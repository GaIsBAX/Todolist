import { FC } from "react";
import { useTodosStore } from "../../app/stores";
import classes from "./index.module.scss";
import AddTodo from "../../components/AddToDo";
import ToDo from "../../components/ToDo";

const MainPage: FC = () => {
  const { todos, addTodo } = useTodosStore();


    console.log(todos);


  

  return (
    <article className={classes.article}>
      <h1 className={classes.articleTitle}>To Do App</h1>

      <section className={classes.articleSection}>
        <AddTodo
          onAdd={(title) => {
            if (title) {
              addTodo(title);
            }
          }}
        />
      </section>
      <section className={classes.articleSection}>
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            description={todo.description}
            date={todo.date}
            status={todo.status}
          />
        ))}
      </section>
    </article>
  );
};

export default MainPage;
