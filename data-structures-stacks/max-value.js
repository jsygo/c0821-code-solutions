/* exported maxValue */

function maxValue(stack) {
  if (stack.peek() === undefined) {
    return -Infinity;
  }
  let maxValue = stack.pop();
  while (stack.peek() !== undefined) {
    const currentValue = stack.pop();
    if (currentValue > maxValue) {
      maxValue = currentValue;
    }
  }
  return maxValue;
}
