/* exported isVowel */
// input: a single character as a string
// output: a Boolean indicating whether or not the character is a vowel,
// function should work with both uppercase or lowercase
// characters to check against (a, A, e, E, i, I, o, O, u, U)
// check if character matches any of the characters we are checking against
//    if it matches any, return true
// otherwise, return false

function isVowel(char) {
  if (char === 'a' || char === 'A' || char === 'e' || char === 'E' || char === 'i' ||
  char === 'I' || char === 'o' || char === 'O' || char === 'u' || char === 'U') {
    return true;
  }
  return false;
}

// solution 2
// change character to lowercase
// check if character matches one of: a, e, i, o, u
// if character matches any, return true
// otherwise, return false

// function isVowel(char) {
//   char = char.toLowerCase();
//   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//     return true;
//   }
//   return false;
// }
