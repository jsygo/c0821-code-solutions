/* exported reverse */
// input: an array
// output: a NEW array containing all the elements of the original array, in reverse order
// create new array for final output
// go through each element in the array starting from the end
// add each element you go over into final output array
// return final output array

function reverse(array) {
  var reverseArr = [];
  for (var i = (array.length - 1); i >= 0; i--) {
    reverseArr.push(array[i]);
  }
  return reverseArr;
}
