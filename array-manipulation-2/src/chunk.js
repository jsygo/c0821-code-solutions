/* exported chunk */
// input: an array, 'size' which is a number that defines how large chunks should be
// output: an array of arrays, containing the number of elements specified by size, any remaining elements are put into a final array
// I can know when to create new arrays within my output array by checking if the index of the current
// iteration plus 1, is divisible by 'size'. each time this is true, push a new array literal into
// the output array. I need to have a way to track which array i am currently working with, so i know which array
// to push elements into.

// create new array for final output
// create a currentArray variable (set to 0) which will be a number that keeps track of the index of the inner array i am pushing elements into
// loop through each element in original array
//    check if the (current index + 1) of each iteration is divisible by 'size'
//        if true, push an empty array literal into final output array
//        ALSO increment currentArray variable
//    push element at current index to the inner array which is at the index of the final output array that is equal to currentArray
// return final output array

// function chunk(array, size) {
//   if (array.length === 0) {
//     return [];
//   }
//   var outputArray = [[]];
//   for (var i = 0; i < array.length; i++) {
//     outputArray[outputArray.length - 1].push(array[i]); // This is the key, i know already exactly where the last array is
//     if ((size % (i + 1)) === 0) {
//       outputArray[currentArray].push(array[i]);
//       outputArray.push([]);
//       currentArray++;
//       continue;
//     }
//     outputArray[currentArray].push(array[i]);
//   }
//   return outputArray;
// }

// check if the input is an empty array
//    if it is, return an empty array
// create an array for final output
// add an array inside the output array for the first chunk
// check through each element in the input array
//    if the length of the inner array at this iteration is equal to the 'size' variable
//        push a new array into the output array, this is a new chunk
//    add each element to the last array in the output array
// return the array

function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var outputArray = [[]];
  for (var i = 0; i < array.length; i++) {
    if (outputArray[outputArray.length - 1].length === size) {
      outputArray.push([]);
    }
    outputArray[outputArray.length - 1].push(array[i]);
  }
  return outputArray;
}
