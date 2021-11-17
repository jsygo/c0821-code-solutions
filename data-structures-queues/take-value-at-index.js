/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  let currentIndex = 0;
  let value = queue.dequeue();
  while (currentIndex < index) {
    queue.enqueue(value);
    value = queue.dequeue();
    currentIndex++;
  }
  return value;
}
