function BankAccount(firstName, lastName, initialDeposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.initialDeposit = initialDeposit;
  this.withdrawal = 0;
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
