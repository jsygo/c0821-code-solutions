/* exported countValues */

function countValues(stack) {
  let values = 0;
  while (stack.peek() !== undefined) {
    stack.pop();
    values++;
  }
  return values;
}
