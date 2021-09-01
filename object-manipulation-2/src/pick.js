/* exported pick */
// input: 'source' which is an object, 'keys' which is an array of strings
// output: a NEW object with all properties of source listed in keys
// output cont.: if a key is listed in keys but is not defined in source, do not add to new object

// create a new object for final output
// check through each index of keys
//    check through each property of source
//        if the key matches a property in source, add that property and value to the new object
// return final output object

function pick(source, keys) {
  var finalOutput = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key) {
        if (source[key] === undefined) {
          continue;
        }
        finalOutput[keys[i]] = source[key];
      }
    }
  }
  return finalOutput;
}
