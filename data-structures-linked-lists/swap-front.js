/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const newHead = list.next;
    list.next = list.next.next;
    newHead.next = list;
    return newHead;
  }
  return list;
}
