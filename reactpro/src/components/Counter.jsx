import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBy, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBy);
  }
  function decrement() {
    setCount(count - incrementBy);
  }
  function increaseIncrement() {
    setIncrementBy(incrementBy + 1);
  }
  function decreaseIncrement() {
    setIncrementBy(incrementBy - 1);
  }
  return (
    <div>
      <h5>Value of count: {count}</h5>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <h4>Increase the increment by {incrementBy}</h4>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseIncrement}>Decrease Increment</button>
    </div>
  );
}
