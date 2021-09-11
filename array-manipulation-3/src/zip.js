/* exported zip */
// input: two arrays, 'first' and 'second'
// output: an array of arrays. each sub-array is a pair of elements, one from first, the other from second
// both those values are at the same index in theyre respective arrays
// the output is only as long as the shorter of 'first' and 'second'

// create an array for final output
// loop through the arrays, stopping at the shorter one
//    at each index
//        add the element from each array into a new array
//        push that array into final output
// return final output

function zip(first, second) {
  var finalOutput = [];
  for (var i = 0; i < first.length && i < second.length; i++) {
    var subArray = [];
    subArray.push(first[i]);
    subArray.push(second[i]);
    finalOutput.push(subArray);
    subArray = [];
  }
  return finalOutput;
}
