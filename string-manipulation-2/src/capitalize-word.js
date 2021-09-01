/* exported capitalizeWord */
// input: a word as a string
// output: the same word with its first character capitalized and the rest in lowercase
// output cont.: if word is javascript it must be cased JavaScript
// check if lowercase verson of the word is equal to 'javascript'
//    if true, return 'JavaScript'
// otherwise, create storage (an new empty string) for capitalized word
// add the uppercase version of the first character to new string
// go through each character of the string, starting with the second one
// add the lowercase version of each character to new string
// return new string

function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  var capitalizedWord = '';
  capitalizedWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    capitalizedWord += word[i].toLowerCase();
  }
  return capitalizedWord;
}
