/* exported isLowerCased */
// input: a single word as a string
// output: a Boolean indicating whether or not all characters in the word are lowercase
// check through each character
// check if each character is different from it's lowercase version
//    if a character is different, return false from the function
// otherwise return true

function isLowerCased(word) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
