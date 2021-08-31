/* exported dropRight */
// input: an array, 'count' which is a number
// output: a NEW array containing all elements of the array except for the last elements, the amount of elements dropped is determined by count
// create a new array for final output
// go over each element in the array, stopping at the value of 'count' from the end of the string , or the end of the string
//    add each element you go over into your new array
// return new array

function dropRight(array, count) {
  var newArray = [];
  for (var i = 0; i < array.length - count && i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
