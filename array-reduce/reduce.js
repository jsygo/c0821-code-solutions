/* global numbers, account, traits */

function reduce(array, reducer, initialValue) {
  // create a variable for final output
  // check if there is an initial value
  // if there is an initial value, assign the initial value to the output variable
  // loop through the array
  // if there is an initial value, start at array[0]
  // if there is no initial value, assign array[0] to the final output variable and start at array[1]
  // at each index, pass the current value of the output variable and the current element to the reducer callback function
  //    assign the return of the reducer to the final output variable

  // return the final output

  let output = null;
  let i = 1;
  if (arguments.length === 3) {
    output = arguments[2];
    i = 0;
  } else {
    output = array[0];
  }
  while (i < array.length) {
    output = reducer(output, array[i]);
    i++;
  }
  return output;
}

const mySum = reduce(numbers, (previousValue, currentValue) => previousValue + currentValue);
console.log('mySum', mySum);

const myProduct = reduce(numbers, (previousValue, currentValue) => previousValue * currentValue);
console.log('myProduct', myProduct);

// eslint-disable-next-line array-callback-return
const myBalance = reduce(account, (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    return previousValue + currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    return previousValue - currentValue.amount;
  }
}, 0);
console.log('myBalance', myBalance);

const myComposite = reduce(traits, (previousValue, currentValue) => Object.assign(previousValue, currentValue));
console.log('myComposite', myComposite);
