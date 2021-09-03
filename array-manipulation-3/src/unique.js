/* exported unique */
// input: an array
// output: a new array that only contains unique elements in the original array, in the original order they were in

// create a new array for final output
// loop through the original array
//    if the new array does not contain the element at current index, add the element to the new array
// return new array

function unique(array) {
  var finalOutput = [];
  for (var i = 0; i < array.length; i++) {
    if (!includes(finalOutput, array[i])) {
      finalOutput.push(array[i]);
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
