import { useState } from "react";

export default function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{name}</div>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </>
  );
}
