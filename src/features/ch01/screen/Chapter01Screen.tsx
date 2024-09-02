"use client";

import { useState } from "react";

const Chapter01Screen = () => {

  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => setCounter((prev) => prev + 1);

  const handleDecrement = () => setCounter((prev) => prev - 1);

  return (
    <div>
      <h1 data-testid="counter">{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Chapter01Screen;