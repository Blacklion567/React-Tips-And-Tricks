


/**
 * ReactMistakes defines a React component that demonstrates some common React mistakes.
 *
 * It renders a form with a text input that logs the value on submit.
 * It maps over an array to render Print and Double buttons that call print() and doubler() functions.
 * The print() function logs the number, while doubler() returns a function that doubles the number.
 */
function ReactMistakes() {
  const array = [1, 2, 3];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('SubmitClick', new FormData(e.target).get('text'));
  };

  function print(number) {
    console.log('print', number);
  }

  function doubler(number) {
    return () => {
      console.log('Double', number * 2);
    };
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" defaultValue="Initial" />
        <button>Submit</button>
      </form>
      {array.map((number) => {
        return (
          <button key={number} onClick={() => print(number)}>
            Print {number}
          </button>
        );
      })}
      <br />
      {array.map((number) => {
        return (
          <button key={number} onClick={doubler(number)}>
            Double {number}
          </button>
        );
      })}
    </>
  );
}

export default ReactMistakes;
