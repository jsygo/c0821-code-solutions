function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsTest = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsTest:', convertMinutesToSecondsTest);

function greet(name) {
  return '"Hey, ' + name + '"';
}

var greetTest = greet('Cody');
console.log('greetTest:', greetTest);

function getArea(width, height) {
  return width * height;
}

var getAreaTest = getArea(17, 42);
console.log('getAreaTest:', getAreaTest);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameTest = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameTest:', getFirstNameTest);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementTest = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementTest:', getLastElementTest);
