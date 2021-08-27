/* exported reverseWord */
// input: a single word as a string
// output: a string containing the same characters as original string, in reverse order
// create storage for reversed word
// create storage for individual characters
// put each character in string into storage
// go through individual characters storage starting from the end
// add each character into storage for reversed word
// return reversed word

function reverseWord(word) {
  var reversedWord = '';
  var characters = [];
  for (var i = 0; i < word.length; i++) {
    characters.push(word[i]);
  }
  for (var j = (characters.length - 1); j >= 0; j--) {
    reversedWord += characters[j];
  }
  return reversedWord;
}
