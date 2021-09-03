/* exported union */
// input: two arrays, 'first' and 'second'
// output: a new array containing unique values from both first and second in the order they appear

// create a new array for final output
// push each element from 'first' into final output
// loop through 'second'
//    if final output does not include the current element, push into final output
// return final output

function union(first, second) {
  var finalOutput = [];
  for (var i = 0; i < first.length; i++) {
    finalOutput.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (!includes(finalOutput, second[j])) {
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
