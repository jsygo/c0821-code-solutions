/* exported ransomCase */
// input: a string
// output: the string with every other character uppercased
// create storage for final output
// check through each character in string
// check if the characters index is even or odd
//    if even, add lowercase version to storage
//    if odd, add uppercase version to storage
// return final output

function ransomCase(string) {
  var ransomCasedWord = '';
  for (var i = 0; i < string.length; i++) {
    if ((i % 2) === 0) {
      ransomCasedWord += string[i].toLowerCase();
    } else {
      ransomCasedWord += string[i].toUpperCase();
    }
  }
  return ransomCasedWord;
}
