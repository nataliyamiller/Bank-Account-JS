function BankAccount(firstName, lastName, deposit) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.balance = deposit;
}

BankAccount.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

BankAccount.prototype.addDeposit = function(newDeposit) {
  return this.balance += newDeposit;
}

BankAccount.prototype.withdrawMoney = function(amount) {
  // this.withdrawal.push(amount);
  return this.balance -= amount;
}

function addMoney() {
  return  '<div id="show-form-1">' +
          '<h2>Deposit money:</h2>'+
          '<form id="add-more-money">' +
          '<div class="form-group">' +
          '<label for="amount1"> Enter amount to be deposited </label>' +
          '<input type="number" class="amount1">' +
          '</div>' +
          '</form>' +
          '</div>';
}

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input#deposit-amount").val("");
  $("#show-form").show();
}


$(document).ready(function(){
  $("form#new-account").submit(function(event) {
    var inputtedFirstName = $("input#first-name").val();
    var inputtedLastName = $("input#last-name").val();
    var inputtedDeposit = parseInt($("input#deposit-amount").val());

    var newAccount = new BankAccount(inputtedFirstName, inputtedLastName, inputtedDeposit);
    $("#show-form").hide();
    $("#show-account-info").show();
    $("#show-account-info h2").text("Welcome, " + newAccount.fullName());
    $("#show-account-info p").text("Your current account balance: $" + newAccount.balance);
    $("#add-more-money").click(function() {
      $(this).prepend(addMoney());
      $(this).off();
      // $(this).click(function(){
      // $("form#add-more-money").submit(function(event) {
      //   var newDeposit =
      // })
      // });
    });

    event.preventDefault();
  });

  resetFields();

});
