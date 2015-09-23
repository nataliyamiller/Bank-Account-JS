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
  return this.balance -= amount;
}

function addMoney() {
  return  '<div id="show-form-1">' +
          '<h2>Deposit money:</h2>'+
          '<form id="add-another-deposit">' +
          '<div class="form-group">' +
          '<label for="amount1"> Enter amount to be deposited </label>' +
          ' <input type="number" id="amount1">' +
          '</div>' +
          '</form>' +
          '</div>';
}

function getMoney() {
  return '<div id="show-form-2">' +
          '<h2>Withdraw money:</h2>'+
          '<form id="withdraw-more-money">' +
          '<div class="form-group">' +
          '<label for="amount2"> Enter amount to be withdrawn </label>' +
          ' <input type="number" id="amount2">' +
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
      $(addMoney()).insertBefore("#add-more-money");
      $(this).off();
      $("#add-more-money").click(function(event) {
        var enteredDeposit = parseInt($("input#amount1").val());
        var newBalance = newAccount.addDeposit(enteredDeposit);
        $("#show-account-info p").text("Your current account balance: $" + newBalance);
        $("#add-another-deposit").get(0).reset();
      });
    });

    $("#withdraw-money").click(function() {
    $(getMoney()).insertBefore("#withdraw-money");
    $(this).off();
    $("#withdraw-money").click(function(event) {
      var withdrawalAmount = parseInt($("input#amount2").val());
      var remainBalance = newAccount.withdrawMoney(withdrawalAmount);
      $("#show-account-info p").text("Your current account balance: $" + remainBalance);
      $("#withdraw-more-money").get(0).reset();
    });
  });



    event.preventDefault();
  });

  resetFields();

});
