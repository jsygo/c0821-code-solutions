/* exported difference */
// input: two arrays, 'first' and 'second'
// output: an array containing the symmetric difference between 'first' and 'second'
// output cont.: that is, elements are included in the new array if they are included in one array but not the other
// output cont.: the result values are unique and their order is determined by the order they occur

// create a new array for final output
// loop through the first array
//    if the second array doesn't include the element at current index, add element to final output
// loop through the second array
//    if the first array doesn't include the element at current index, add element to final output
// return final output

function difference(first, second) {
  var finalOutput = [];
  for (var i = 0; i < first.length; i++) {
    if (!includes(second, first[i])) {
      finalOutput.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!includes(first, second[j])) {
      finalOutput.push(second[j]);
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
