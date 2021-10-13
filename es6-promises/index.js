const takeAChance = require('./take-a-chance');

const promise = takeAChance('Josh');

promise
  .then(value => {
    console.log(value);
  },
  error => {
    console.log(error.message);
  });
