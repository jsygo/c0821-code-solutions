/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numbers) {
    var numbersSum = 0;
    for (var i = 0; i < numbers.length; i++) {
      numbersSum += numbers[i];
    }
    return numbersSum;
  },
  getAverage: function (numbers) {
    var numbersSum = calculator.sumAll(numbers);
    return numbersSum / numbers.length;
  }
}
;
