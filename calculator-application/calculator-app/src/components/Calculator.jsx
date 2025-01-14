import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import styles from "./calculator.module.css";

export default function Calculator() {
  const [input, setInput] = useState("");

  // Handle button click
  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  // Clear the input
  const clearInput = () => {
    setInput("");
  };

  // Calculate the result
  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Use eval to evaluate the expression
    } catch {
      setInput("Error"); // If there's an error, display "Error"
    }
  };

  return (
    <div className={styles.calculator}>
      <h1>Calculator</h1>
      <Display input={input} />
      <div className={styles.buttons}>
        <Button label="7" onClick={handleClick} />
        <Button label="8" onClick={handleClick} />
        <Button label="9" onClick={handleClick} />
        <Button label="/" onClick={handleClick} />
        <Button label="4" onClick={handleClick} />
        <Button label="5" onClick={handleClick} />
        <Button label="6" onClick={handleClick} />
        <Button label="*" onClick={handleClick} />
        <Button label="1" onClick={handleClick} />
        <Button label="2" onClick={handleClick} />
        <Button label="3" onClick={handleClick} />
        <Button label="-" onClick={handleClick} />
        <Button label="." onClick={handleClick} />
        <Button label="0" onClick={handleClick} />
        <Button label="=" onClick={calculateResult} />
        <Button label="+" onClick={handleClick} />
        <Button label="C" onClick={clearInput} />
      </div>
    </div>
  );
}
