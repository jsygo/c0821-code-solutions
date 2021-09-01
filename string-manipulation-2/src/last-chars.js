/* exported lastChars */
// input:  a length that is a number, a string
// output: a string that is the length of the value of length, and contains the last characters of the string up to that length
// create new string for final output
// check through each character, starting at string.length - length, until the end of the string
//  if length is longer than the string, continue til you reach the beginning
// add each character you go over into new string
// return new string

function lastChars(length, string) {
  var lastCharsOutput = '';
  for (var i = string.length - length; i < string.length; i++) {
    if (i < 0) {
      continue;
    }
    lastCharsOutput += string[i];
  }
  return lastCharsOutput;
}
