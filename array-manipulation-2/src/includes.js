/* exported includes */
// input: an array, a value
// output: a Boolean indiciating whether or not the value is present at any idex of the array
// check through each element in array
//    each time compare element to value
//      if the same, return true
// otherwise, return false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
