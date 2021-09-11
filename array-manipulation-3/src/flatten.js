/* exported flatten */
// input: an array
// output: a new array with any direct child arrays unwrapped
// output cont.: this functio should only flatten array by one level
// create new array for final output
// loop through the array
//    if element at index is an array, loop through that array
//        push each element inside to final output
//    otherwise, push element to final output
// return final output

function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (var j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  }
  return flattenedArray;
}
