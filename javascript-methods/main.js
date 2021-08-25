var x = 5;
var y = 7;
var z = 13;

var maximumValue = Math.max(x, y, z);
console.log('maximumValue:', maximumValue);

var heroes = ['Thor', 'Iron Man', 'Flash', 'Batman'];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  { title: 'book 1', author: 'John Smith' },
  { title: 'book 2', author: 'John Doe' },
  { title: 'book 3', author: 'Jane Doe' }
];

var lastBook = library.pop();
console.log('lastBook;', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Joshua Sy Go';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
