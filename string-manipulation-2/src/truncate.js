/* exported truncate */
// input: a length which will be a number, a string
// output: a string that is only as long as the value of the 'length' variable, with '...' appended
// output cont.: if string is shorter than length, return string plus '...'
// create storage for shortened string
// go through as many characters of the string as is the value of 'length' variable
// add each character you go over to the storage for the shortened string
// append '...' to your shortened string
// return shortened string

function truncate(length, string) {
  var truncatedStr = '';
  for (var i = 0; (i < length) && (i < string.length); i++) {
    truncatedStr += string[i];
  }
  truncatedStr += '...';
  return truncatedStr;
}
