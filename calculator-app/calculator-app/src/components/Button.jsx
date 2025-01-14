import styles from "./button.module.css";

function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}

export default Button;
