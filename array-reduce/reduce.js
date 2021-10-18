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
    output = initialValue;
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

const mySum = reduce(numbers, (sum, number) => sum + number);
console.log('mySum', mySum);

const myProduct = reduce(numbers, (product, number) => product * number);
console.log('myProduct', myProduct);

// eslint-disable-next-line array-callback-return
const myBalance = reduce(account, (balance, transaction) => {
  if (transaction.type === 'deposit') {
    return balance + transaction.amount;
  } else if (transaction.type === 'withdrawal') {
    return balance - transaction.amount;
  }
}, 0);
console.log('myBalance', myBalance);

const myComposite = reduce(traits, (composite, trait) => Object.assign(composite, trait), {});
console.log('myComposite', myComposite);
