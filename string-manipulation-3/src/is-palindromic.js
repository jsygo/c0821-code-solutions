/* exported isPalindromic */
// input: a string
// output: a Boolean indicating whther or not the string is a palindrome
// create a new test string
// create a copy of string with no spaces
// add each character except spaces from original string to the new string in reverse order
// check if the test string is the same as the orginal string
//    if it is the same, return true
//    otherwise, return false

function isPalindromic(string) {
  var testString = '';
  var noSpaceString = string.replaceAll(' ', '');
  for (var i = string.length - 1; i >= 0; i--) {
    if (string[i] !== ' ') {
      testString += string[i];
    }
  }
  if (testString === noSpaceString) {
    return true;
  }
  return false;
}
