/* exported toObject */
// input: an array containing two elements; a key which is a string, and a value
// output: an object with a property named the value of 'key' variable,
// output cont.: the property must have a value of the value of the 'value' variable
// create an object
// create a property named the value of 'key' variable
// assign the value of 'value' variable to the new property
// return the object

function toObject(keyValuePair) {
  var someObj = {};
  someObj[keyValuePair[0]] = keyValuePair[1];
  return someObj;
}
