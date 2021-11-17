/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const nextNode = new LinkedList(value);
  nextNode.next = list.next;
  list.next = nextNode;
}
