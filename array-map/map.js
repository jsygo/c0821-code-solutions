/* global numbers, languages */

function map(array, transform) {
  const transformedArr = [];
  for (let i = 0; i < array.length; i++) {
    transformedArr.push(transform(array[i]));
  }
  return transformedArr;
}

const myDoubled = map(numbers, number => number * 2);
console.log('myDoubled', myDoubled);

const myPrices = map(numbers, number => `$${number}.00`);
console.log('myPrices', myPrices);

const myUpperCased = map(languages, language => language.toUpperCase());
console.log('myUpperCased', myUpperCased);

const myFirstLetters = map(languages, language => language[0]);
console.log('myFirstLetters', myFirstLetters);
