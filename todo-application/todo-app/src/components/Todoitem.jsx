import styles from "./todoitem.module.css";

export default function Todoitem({ item, todos, setTodos }) {
  function handleClick(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }
  function handleDelete(item) {
    console.log(item);
    setTodos(todos.filter((todo) => todo != item));
  }
  const itemClass = item.done ? styles.itemDone : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemClass} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
