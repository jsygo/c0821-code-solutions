/* exported swapChars */
// input: a firstIndex number, a secondIndex number, a string
// the string with the first index character and second index character swapped
// store first character in a variable
// store second character in a variable
// set firstIndex of string to second character
// set secondIndex of string to first character
// return string

// UPDATE: i remembered strings are immutable and all that shit i just wrote is useless
// create new string for final output
// go through entire string
//    if at firstIndex, add character at secondIndex to the new string
//    if at secondIndex, add character at firstIndex to new string
//    otherwise, add current character to new string
// return new string

function swapChars(firstIndex, secondIndex, string) {
  var swappedString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += string[secondIndex];
    } else if (i === secondIndex) {
      swappedString += string[firstIndex];
    } else {
      swappedString += string[i];
    }
  }
  return swappedString;
}
