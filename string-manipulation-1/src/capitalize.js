/* exported capitalize */
// input: a string of a single word
// output: a string of the same word with the first character uppercased,
// and the rest lowercase
// create storage for first character
// create storage for the rest of the characters
// create storage for capitalized word
// check each character of string
// if first, put into first character storage
// otherwise, put into other characters storage
// capitalize first character
// lowercase all other characters
// put first character and rest of characters back together into a completed word
// store your completed word
// return completed word

function capitalize(word) {
  var firstChar = '';
  var otherChars = '';
  var capitalizedWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      firstChar = word[0];
    } else {
      otherChars += word[i];
    }
  }
  firstChar = firstChar.toUpperCase();
  otherChars = otherChars.toLowerCase();
  capitalizedWord = firstChar + otherChars;
  return capitalizedWord;
}
