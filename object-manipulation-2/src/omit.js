/* exported omit */
// input: 'source' which is an object, 'keys' which is an array of strings
// output: a NEW object WITHOUT all properties of source listed in keys

// create a new object for final output
// check through each property in the source object
//    check through keys array
//        if the property matches a key, skip to next property (break)
//        if it does not match any key, add to new object
// return final output object

function omit(source, keys) {
  var finalOutput = {};
  for (var property in source) {
    for (var i = 0; i < keys.length; i++) {
      if (property === keys[i]) {
        break;
      } else if (i === keys.length - 1) {
        finalOutput[property] = source[property];
      }
    }
  }
  return finalOutput;
}
