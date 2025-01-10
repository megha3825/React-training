import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [incrementBY, setIncrementBy] = useState(1);
  function increment() {
    setCount(count + incrementBY);
  }

  function decrement() {
    setCount(count - incrementBY);
  }

  function increaseIncrement() {
    setIncrementBy(incrementBY + 1);
  }

  function decreaseDecrement() {
    setIncrementBy(incrementBY - 1);
  }

  return (
    <div>
      <h3> Count value is {count}</h3>
      <button onClick={increment}>Increase the count</button>
      <button onClick={decrement}>decrease the count</button>

      <h4> Increment the count value by {incrementBY}</h4>
      <button onClick={increaseIncrement}>Increase Increment</button>
      <button onClick={decreaseDecrement}>Decrease Increment</button>
    </div>
  );
}
