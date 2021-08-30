/* exported takeRight */
// input: an array, 'count' which is a positive integer
// output: a NEW array containing the last element of the array, including as many as the value of 'count'
// create a new array for final output
// go through each element in the array, starting at the value of 'count' from the end
//    add each element you go over into the new array
// return new array

function takeRight(array, count) {
  var newArray = [];
  for (var i = array.length - count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
