import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.todoForm}
      >
        <input
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          type="text"
          value={todo.name}
          className={styles.formInput}
          placeholder="Enter todo item..."
        />
        <button type="submit" className={styles.formButton}>
          Add
        </button>
      </form>
    </div>
  );
}
