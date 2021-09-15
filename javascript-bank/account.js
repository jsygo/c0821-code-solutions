/* exported Account */

function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(newDeposit);
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  var newWithdrawal = new Transaction('withdrawal', amount);
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(newWithdrawal);
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var balance = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      balance += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      balance -= this.transactions[i].amount;
    }
  }
  return balance;
};
