/* exported getWords */
// input: a string of zero or more words, separated by spaces
// output: an array of strings, each string being one word from the original string
// output cont.: if input has zero words, output must be an empty array, not an array of an empty string
// create storage for final output
// create storage for individual words
// check if input is empty
//    if input is empty, return empty array
// check through each character
// if character is not a space, add to storage for individual word
// if character is a space, add individual word to storage for output and clear value word storage
// if character is at end of string, add individual word to storage for output
// return final output

function getWords(string) {
  var wordsArr = [];
  var word = '';
  if (string === '') {
    return wordsArr;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      word += string[i];
    } else {
      wordsArr.push(word);
      word = '';
    }
  }
  wordsArr.push(word);
  return wordsArr;
}
