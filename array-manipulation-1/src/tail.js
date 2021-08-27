/* exported tail */
// input: an array
// output: a NEW array containing all elements of old array except for the first one
// create new array for final output
// go through each element of array starting with the second one
// add each element to the new array
// return new array

function tail(array) {
  var tailArr = [];
  for (var i = 1; i < array.length; i++) {
    tailArr.push(array[i]);
  }
  return tailArr;
}
