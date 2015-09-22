function BankAccount(firstName, lastName, initialDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.initialDeposit = initialDeposit;
  this.balance = initialDeposit;
  this.withdrawal = 0;
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

BankAccount.prototype.remainingBalance = function() {
  this.balance -= this.withdrawal;
  return this.balance;
}

// BankAccount.prototype.withdrawMoney = function(amount) {
//   return this.remainingBalance - amount;
// }
