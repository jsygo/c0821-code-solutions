/* exported invert */
// input: 'source' which is an object
// output: a NEW object with all the properties of source, but the keys and values inverted

// create new object for final output
// check through each property of source
//    each time, set a new property of the new object with a key of the properties value, and a value of the properties key
// return final output object

function invert(source) {
  var finalOutput = {};
  for (var property in source) {
    finalOutput[source[property]] = property;
  }
  return finalOutput;
}
