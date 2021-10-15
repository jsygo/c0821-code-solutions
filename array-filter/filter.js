/* global numbers, names */

function filter(array, predicate) {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      results.push(array[i]);
    }
  }
  return results;
}

const myEvenNumbers = filter(numbers, number => number % 2 === 0);
console.log('myEvenNumbers', myEvenNumbers);

const myOverFive = filter(numbers, number => number > 5);
console.log('myOverFive', myOverFive);

const myStartWithE = filter(names, name => name.startsWith('E'));
console.log('myStartWithE', myStartWithE);

const myHaveD = filter(names, name => name.includes('D') || name.includes('d'));
console.log('myHaveD', myHaveD);
