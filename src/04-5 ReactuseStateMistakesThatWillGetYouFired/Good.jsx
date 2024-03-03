// # Now let’s use callback when setting state. Notice, that it will also help us to remove unnecessary dependency from useCallback. Please, remember the solution! This question is frequently asked during interviews)

import { useCallback, useState } from 'react';

export default function Section04Good() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((prev) => prev + 1);
    // Dependency removed!
  }, []);

  const handleDelayedIncrement = useCallback(() => {
    // Using prev state helps us to avoid unexpected behaviour
    setTimeout(() => setCounter((prev) => prev + 1), 1000);
    // Dependency removed!
  }, []);

  return (
    <div>
      <h1>{`Counter is ${counter}`}</h1>

      <button onClick={handleIncrement}>Instant increment</button>
      <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  );
}
