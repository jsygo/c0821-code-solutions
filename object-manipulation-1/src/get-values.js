/* exported getValues */
// input: an object
// output: an array containing all the objects property values
// create an array for final output of property values
// check through each property of the object
// add each properties value to the array
// return the array

function getValues(object) {
  var values = [];
  for (var property in object) {
    values.push(object[property]);
  }
  return values;
}
