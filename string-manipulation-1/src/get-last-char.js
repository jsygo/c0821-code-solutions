/* exported getLastChar */
// input: string
// output: last character of string
// create storage for last character of string
// find length of string
// find character at the length of string
// put last character into storage
// return last character

function getLastChar(string) {
  var lastChar = '';
  lastChar = string[string.length - 1];
  return lastChar;
}

// simplified

// function getLastChar(string) {
//   return string[string.length - 1];
// }
