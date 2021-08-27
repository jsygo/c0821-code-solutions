/* exported compact */
// input: an array
// output: a NEW array containing all TRUTHY elements of the original array in the same order
// create a new array for final output
// check each element of array for truthiness
// if truthy, add to final output array
// return final output array

function compact(array) {
  var truthyArr = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyArr.push(array[i]);
    }
  }
  return truthyArr;
}
