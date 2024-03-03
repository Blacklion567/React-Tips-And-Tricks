
/**
 * Checks if array length is greater than 0 before rendering to avoid
 * rendering empty arrays.
 *
 * Renders passed in array joined as string if length > 0.
 *
 * Shows example of:
 * - Rendering array values conditionally
 * - Avoiding render issues with empty arrays
 */
function ReactMistakes02() {
  // First Example Not Fix
  const arrayFirst = [1, 2, 3];

  // Second Example Fix
  const arraySecond = [];

  return (
    <>
      {/* #01 Not Fix */}
      {arrayFirst.length && (
        <div>
          <span>Array Print: </span> {arrayFirst.join(', ')}
        </div>
      )}

      {/* #2 Fix*/}
      {arraySecond.length !== 0 && (
        <div>
          <span>Array Print: </span> {arraySecond.join(', ')}
        </div>
      )}
    </>
  );
}

export default ReactMistakes02;
