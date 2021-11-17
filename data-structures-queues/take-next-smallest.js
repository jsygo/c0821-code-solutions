/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let current = queue.dequeue();
  let next = queue.peek();
  if (current === undefined || next === undefined) {
    return current;
  }
  while (current > next) {
    queue.enqueue(current);
    current = queue.dequeue();
    next = queue.peek();
  }
  return current;
}
