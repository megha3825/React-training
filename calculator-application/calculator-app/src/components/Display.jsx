import React from "react";
import styles from "./display.module.css";

function Display({ input }) {
  return (
    <div className={styles.display}>
      <input type="text" value={input} readOnly />
    </div>
  );
}

export default Display;
