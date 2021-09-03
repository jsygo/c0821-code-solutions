/* exported intersection */
// input: two arrays, 'first' and 'second'
// output: a new array containing unique values found in both 'first' and 'second'

// create a new array for final output
// loop through 'first'
//    if the element at current index is included in 'second', push element to final output
// return final output

function intersection(first, second) {
  var finalOutput = [];
  for (var i = 0; i < first.length; i++) {
    if (includes(second, first[i])) {
      finalOutput.push(first[i]);
    }
  }
  return finalOutput;
}

function includes(array, element) {
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (array[arrayIndex] === element) {
      return true;
    }
  }
  return false;
}
