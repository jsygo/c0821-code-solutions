/* exported equal */
// input: two arrays, 'first' and 'second'
// output: a Boolean indicating whether or not first and second are equal to each other index-for-index
// loop through 'first'
//    at each index, if second at the same index is not the same, return false
// return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
