/* exported isAnagram */
// input: firstString, secondString
// output: a Boolean indicating whether or not second string is an anagram for the first string
// create an array for all the character in the first string
// add all characters of the first string into that array
// create an array for all the characters in the first string
// add all characters from the second string into the second array
// go through each element in first array
//    check if its value matches the value of any element in the second array
//        if it matches, delete those elements from the second array and move on to the next character in the first array
// check if both arrays are empty
//    if they are, return true
//    otherwise, return false

function isAnagram(firstString, secondString) {
  var firstNoSpace = firstString.replaceAll(' ', '');
  var secondNoSpace = secondString.replaceAll(' ', '');
  var firstCharacters = [];
  for (var i = 0; i < firstNoSpace.length; i++) {
    firstCharacters.push(firstNoSpace[i]);
  }
  var secondCharacters = [];
  for (var j = 0; j < secondNoSpace.length; j++) {
    secondCharacters.push(secondNoSpace[j]);
  }
  for (var k = 0; k < firstCharacters.length; k++) {
    for (var m = 0; m < secondCharacters.length; m++) {
      if (firstCharacters[k] === secondCharacters[m]) {
        secondCharacters.splice(m, 1);
        break;
      }
    }
  }
  if (secondCharacters.length === 0) {
    return true;
  }
  return false;
}
