/* exported firstChars */
// input: a length that is a number, a string
// output: a string that is the length of the value of length, and contains the first characters of the string up to that length
// create new string for final output
// go through each character of string, until value of length variable, or until string ends
// add each character you go over to new string
// return new string

function firstChars(length, string) {
  var firstCharsOutput = '';
  for (var i = 0; i < length && i < string.length; i++) {
    firstCharsOutput += string[i];
  }
  return firstCharsOutput;
}
