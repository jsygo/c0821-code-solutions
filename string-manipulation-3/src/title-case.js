/* exported titleCase */
// input: 'title' which is a string
// output: the title but with APA Title Case Applied
// first i need to find each word
// they will always start the beginning of the string or after a space or after a hyphen
// they will always end at a space or at the end of the string or before a hyphen
// i need an empty string to send each word to that i can check against the minor words list and check the length of
// Rules: Capitalize the first word of the title and of any subtitle
//          always capitalize title[0]
//          title[0].toUpperCase(), start loop at title[1]
//          capitalize if a first letter is two indexes after a colon
//          if (title[i - 2] === ':') {storageString[0].toUpperCase()}
// Capitalize all major words, including the second part of hyphenated words
//          capitalize if a first letter follows a hyphen
//          if (title[i - 1] === '-') {storageString[0].toUpperCase()}
// Capitalize all words of four or more letters
//          capitalize if the word is at least 4 letters
//          if (storageString.length > 3) {storageString[0].toUpperCase()}
// list of minor words: ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to']
// toLowerCase() word if it matches any word in this array
//          for (var minorWordsIndex = 0; minorWordsIndex < minorWords.length; minorWordsIndex++)
// hardcoded words: 'JavaScript', 'API'
//          if (storageString.toLowerCase() === 'javascript') {storageString = 'JavaScript'}
//          if (storageString.toLowerCase() === 'javascript:') {storageString = 'JavaScript:'}
//          if (storageString.toLowerCase() === 'api') {storageString = 'API'}

// create new string for final output
// create a storage string that will hold each word i find
// loop over the original string
//    add each character to the storage string
//    if character is a space or a hyphen or im at the end of title, start running my checks on the storage string
//        if (title[i] === ' ' || title[i] === '-' || i = title.length - 1)
//    capitalize according to any applicable rules
//    add storage string to final output string
//    clear the storage string
// return the final output
//    finalOutput += storageString;
//    storageString = '';

function titleCase(title) {
  var finalOutput = '';
  var storageString = '';
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var firstLetterIndex = 0;
  var firstChar = '';
  var otherChars = '';
  for (var i = 0; i < title.length; i++) {
    storageString += title[i];
    // debugger;
    // if (title[i] === ' ' || title[i] === '-' || i === title.length - 1) {
    //   var storageStringCopy = storageString;
    //   console.log('storageString', storageString);
    //   console.log('storageStringCopy', storageStringCopy);
    //   if (storageString[storageString.length - 1] === ' ') {
    //     storageString = '';
    //     for (var storageIndex = 0; storageIndex < (storageStringCopy.length - 1); storageString++) {
    //       storageString += storageStringCopy[storageIndex];
    //     }
    //   }
    if (storageString.toLowerCase() === 'javascript') {
      storageString = 'JavaScript';
      // if (storageStringCopy[storageStringCopy.length - 1] === ' ') {
      //   storageString += ' ';
      // }
    } else if (storageString.toLowerCase() === 'javascript:') {
      storageString = 'JavaScript:';
      // if (storageStringCopy[storageStringCopy.length - 1] === ' ') {
      //   storageString += ' ';
      // }
    } else if (storageString.toLowerCase() === 'api') {
      storageString = 'API';
      // if (storageStringCopy[storageStringCopy.length - 1] === ' ') {
      //   storageString += ' ';
      // }
    } else if (firstLetterIndex === 0 || title[firstLetterIndex - 2] === ':') {
      // if (storageStringCopy[storageStringCopy.length - 1] === ' ') {
      //   storageString += ' ';
      // }
      firstChar = storageString[0];
      for (var j = 1; j < storageString.length; j++) {
        otherChars += storageString[j];
      }
      storageString = '';
      storageString += firstChar.toUpperCase();
      storageString += otherChars.toLowerCase();
      firstChar = '';
      otherChars = '';
    } else if (minorWords.includes(storageString)) {
      // if (storageStringCopy[storageStringCopy.length - 1] === ' ') {
      //   storageString += ' ';
      // }
      storageString = storageString.toLowerCase();
    } else {
      // if (storageStringCopy[storageStringCopy.length - 1] === ' ') {
      //   storageString += ' ';
      // }
      firstChar = storageString[0];
      for (var k = 1; k < storageString.length; k++) {
        otherChars += storageString[k];
      }
      storageString = '';
      storageString += firstChar.toUpperCase();
      storageString += otherChars.toLowerCase();
      firstChar = '';
      otherChars = '';
    }
    finalOutput += storageString;
    storageString = '';
    firstLetterIndex = i + 1;
  }
  return finalOutput;
}
