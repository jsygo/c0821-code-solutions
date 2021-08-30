/* exported drop */
// input: an array, 'count' which is a number
// output: a NEW array containing all elements in old array starting after the amount of elements specified by count
// create new array for final output
// go through all elements of array, starting after the count
//    add each element you go over into new array
// return new array

function drop(array, count) {
  var newArray = [];
  for (var i = count; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
