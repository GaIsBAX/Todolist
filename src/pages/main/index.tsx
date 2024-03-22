import { FC } from "react";
import { useTodosStore } from "../../app/stores";
import classes from "./index.module.scss";
import AddTodo from "../../components/AddToDo";

const MainPage: FC = () => {
  const [todos, addTodo] = useTodosStore((state) => [
    state.todos,
    state.addTodo,
  ]);

  return (
    <article className={classes.article}>
      <h1 className={classes.articleTitle}>To Do App</h1>

      <section className={classes.articleSection}>
        <AddTodo
          onAdd={(title, description) => {
            if (title) {
              addTodo(title, description);
              
            }
          }}
        />
      </section>
      <section className={classes.articleSection}>
        {!todos.length&&(
          <p>нихуя</p>
        )}
        {todos.map((todo)=>(
          
        ))}
      </section>
    </article>
  );
};

export default MainPage;
