/* exported setValue */
// input: an object, a key which is a string, a value
// output: undefined, function creates a new property named the value of key
// output cont.: sets the value of key property to the value of the 'value' variable
// create a new property of the object named the value of key
// assign the value of 'value' variable to the new property

function setValue(object, key, value) {
  object[key] = value;
}
