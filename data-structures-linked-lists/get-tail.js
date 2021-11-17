/* exported getTail */

function getTail(list) {
  let currentNode = list;
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  return currentNode.data;
}
