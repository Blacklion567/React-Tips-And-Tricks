import { useCallback, useState } from 'react';

// !Bad Code
// # When using setState, you can access the previous state as an argument of callback. Not using it can cause unexpected state updates. We are going to take apart that mistake with a typical Counter example.
export default function Section04Bad() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, [counter]);

  const handleDelayedIncrement = useCallback(() => {
    // counter + 1 is the problem,
    // because the counter can be already different, when callback invokes
    setTimeout(() => setCounter(counter + 1), 1000);
  }, [counter]);

  return (
    <div>
      <h1>{`Counter is ${counter}`}</h1>
      {/* This handler works just fine */}
      <button onClick={handleIncrement}>Instant increment</button>
      {/* Multi-clicking that handler causes unexpected states updates */}
      <button onClick={handleDelayedIncrement}>Delayed increment</button>
    </div>
  );
}
