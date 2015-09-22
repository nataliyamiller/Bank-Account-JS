function BankAccount(firstName, lastName, deposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = deposit;
  this.withdrawal = [];
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

BankAccount.prototype.withdrawMoney = function(amount) {
  this.withdrawal.push(amount);
  return this.balance -= amount;
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#deposit-amount").val("");
  $("input.withdrawal-amount").val("");
}

$("form#new-account").submit(function(event) {
  even.preventDefault();

  var inputtedFirstName = $("input#first-name").val();
  var inputtedLastName = $("input#last-name").val();
  var inputtedDeposit = parseInt($("input#deposit-amount").val());

  var newAccount = new BankAccount(inputtedFirstName, inputtedLastName, inputtedDeposit);
});
