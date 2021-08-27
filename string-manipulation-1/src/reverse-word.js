/* exported reverseWord */
// input: a single word as a string
// output: a string containing the same characters as original string, in reverse order
// create storage for reversed word
// NOT NEEDED: create storage for individual characters
// NOT NEEDED: put each character in string into storage
// go through characters storage starting from the end
// add each character into storage for reversed word
// return reversed word

function reverseWord(word) {
  var reversedWord = '';
  for (var i = (word.length - 1); i >= 0; i--) {
    reversedWord += word[i];
  }
  return reversedWord;
}
