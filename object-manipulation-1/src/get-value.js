/* exported getValue */
// input: an object, a key which will be a string
// output: the value of the property of the object who's name matches key
// check through each property of the object
// if property matches key, return the value of that property

function getValue(object, key) {
  for (var property in object) {
    if (property === key) {
      return object[property];
    }
  }
}
