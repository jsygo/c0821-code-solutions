var student = {
  firstName: 'Joshua',
  lastname: 'Sy Go',
  age: 20
};

var fullName = student.firstName + ' ' + student.lastname;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'personal trainer';

console.log('does student live in Irvine:', student.livesInIrvine);
console.log('previousOccupation of student:', student.previousOccupation);
console.log('student object:', student);

var vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: 2014
};

vehicle['color'] = 'silver';
vehicle['isConvertible'] = false;

console.log('color of vehicle:', vehicle['color']);
console.log('is vehicle convertible:', vehicle['isConvertible']);
console.log('vehicle object:', vehicle);

var pet = {
  name: 'Garfield',
  type: 'cat'
};

delete pet.name;
delete pet.type;

console.log('pet object:', pet);
