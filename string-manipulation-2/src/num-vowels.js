/* exported numVowels */
// input: a string
// output: the number of vowel characters in the string
// create vowel counter
// lowercase all characters
// check each character in string
//    if character is a vowel, increment counter
// return vowel count

function numVowels(string) {
  var count = 0;
  string = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (string[i] === 'a' || string[i] === 'e' || string[i] === 'i' ||
    string[i] === 'o' || string[i] === 'u') {
      count++;
    }
  }
  return count;
}
