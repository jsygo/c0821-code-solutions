const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const numberInputs = [];
numberInputs.push(parseInt(process.argv[2]));
numberInputs.push(parseInt(process.argv[4]));

if (process.argv[3] === 'plus') {
  console.log(add(numberInputs[0], numberInputs[1]));
} else if (process.argv[3] === 'minus') {
  console.log(subtract(numberInputs[0], numberInputs[1]));
} else if (process.argv[3] === 'times') {
  console.log(multiply(numberInputs[0], numberInputs[1]));
} else if (process.argv[3] === 'over') {
  console.log(divide(numberInputs[0], numberInputs[1]));
}
