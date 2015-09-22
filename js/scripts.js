function BankAccount(firstName, lastName, deposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = deposit;
  this.withdrawal = 0;
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

BankAccount.prototype.withdrawMoney = function(amount) {
  this.withdrawal += amount;
  return this.balance -= amount;
}
