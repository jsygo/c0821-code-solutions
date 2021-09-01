/* exported take */
// input: an array, a positive integer 'count'
// output: a NEW array containing the first elements of the array up to the value of count
// create a new array for final ouput
// go through each element of the array, up until count, or until the end of the array
// add each element you go over into your new array
// return new array

function take(array, count) {
  var outputArray = [];
  for (var i = 0; i < count && i < array.length; i++) {
    outputArray.push(array[i]);
  }
  return outputArray;
}
