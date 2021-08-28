/* exported getKeys */
// input: an object
// output: an array containing all the objects property keys
// create an array for all objects property keys
// go through each property of the object
// add each property key into array
// return array

function getKeys(object) {
  var keys = [];
  for (var property in object) {
    keys.push(property);
  }
  return keys;
}
