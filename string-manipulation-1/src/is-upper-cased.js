/* exported isUpperCased */
// input: a single word as a string
// output: a Boolean that indicated whether or not ALL characters in the word are uppercase
// check through each character
// check if each character is different from its uppercased version
//    if any character is different, return false
// otherwise, return true

function isUpperCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
