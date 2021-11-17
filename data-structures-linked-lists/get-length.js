/* exported getLength */

function getLength(list) {
  let length = 1;
  let currentNode = list;
  while (currentNode.next) {
    currentNode = currentNode.next;
    length++;
  }
  return length;
}
