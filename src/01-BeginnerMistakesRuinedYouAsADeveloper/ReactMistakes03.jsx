import { useState } from "react";

/**
 * React hook to manage state for an array. Initializes with default value.
 * Provides functions to immutably add to start/end of array.
 */
function ReactMistakes03() {
  const [array, setArray] = useState([1, 2, 3]);

  function addNumberToStart(number) {
    /* Not Fix Unshift 0 To array */
    // array.unshift(number);
    // setArray(array);

    // - Fix Unshift 0 To array
    setArray((currentValue) => {
      return [number, ...currentValue];
    });
  }

  function addNumberToEnd(number) {
    /* Not Fix Push 0 To array */
    // array.push(number);
    // setArray(array);

    // - Fix Push 0 To array
    setArray((currentValue) => {
      return [...currentValue, number];
    });
  }

  return (
    <>
      {array.join(', ')}
      <br />
      <button
        onClick={() => {
          addNumberToStart(0);
          addNumberToEnd(0);
          console.log(array);
        }}
      >
        Add 0 To The Start/End
      </button>
    </>
  );
}

export default ReactMistakes03;
