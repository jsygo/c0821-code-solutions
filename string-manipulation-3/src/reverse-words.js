/* exported reverseWords */
// input: a string
// output: a version of the string with all words reversed but the words in original order
// I can loop through the string and go until i find a space. I need a variable that will tell me
// the index of the previous space. this will start at -1 and get updated when i find a space.
// when i do get to a space, iterate backwards through the string until the index after the last space
// each character will get added to the new string, and then the space i am on will get added

// create new string
// create a variable for the previous space, which will start at -1 (because the first index i need to put
// in the new string is 0)
// loop through the string
//    if the character im at is a space
//        go backwards over each character starting previous to it until the index after the index of the last space
//        add each character into new string
//        add space into string
//        set previous space variable to current index
//    if at end of string, go backwards til previous space and add characters to string
// return new string

function reverseWords(string) {
  var reversedWords = '';
  var previousSpace = -1;
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      for (var j = i - 1; j > previousSpace; j--) {
        reversedWords += string[j];
      }
      reversedWords += string[i];
      previousSpace = i;
    }
    if (i === string.length - 1) {
      for (var k = i; k > previousSpace; k--) {
        reversedWords += string[k];
      }
    }
  }
  return reversedWords;
}
