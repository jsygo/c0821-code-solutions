/* exported capitalizeWords */
// input: a string
// output: the string with every words first character uppercase, and every other character lowercase
// what do i need: find each of the words (i can easily do the first one with string[0],
// but the words after, i can check if each character is preceded by a space,
// OR every time i get to a space, uppercase the next character, then move to the next character)
// i also need to lowercase all other characters

// create a new string as storage for the final output
// uppercase first character in string, add to new string
// check through each character in the string, starting at the second one
//    if the character is a space, add space to the new string
//    AND uppercase the next character and add it to the new string
//    if the character is preceded by a space, skip that character
//    otherwise, add lowercase character to string
// return new string

function capitalizeWords(string) {
  var capitalString = '';
  capitalString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i] === ' ') {
      capitalString += string[i];
      capitalString += string[i + 1].toUpperCase();
      i++;
    } else {
      capitalString += string[i].toLowerCase();
    }
  }
  return capitalString;
}
