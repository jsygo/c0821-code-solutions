/* exported includes */

function includes(list, value) {
  if (list.data === value) {
    return true;
  }
  let currentNode = list;
  while (currentNode.next) {
    currentNode = currentNode.next;
    if (currentNode.data === value) {
      return true;
    }
  }
  return false;
}
