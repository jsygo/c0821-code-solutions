/* exported initial */
// input: an array
// output: a NEW array containing all the elements of the old array except for the last element
// create a new array for final output
// go through each element of the original array, stopping at the second to last one
// add each element you go over into new array
// return new array

function initial(array) {
  var initialArr = [];
  for (var i = 0; i < (array.length - 1); i++) {
    initialArr.push(array[i]);
  }
  return initialArr;
}
