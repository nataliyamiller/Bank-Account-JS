describe('BankAccount', function() {
  it("creates a new bank account for the user with the given data", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100)
    expect(testBankAccount.firstName).to.equal("Nata");
    expect(testBankAccount.lastName).to.equal("Miller");
    expect(testBankAccount.initialDeposit).to.equal(100);
    expect(testBankAccount.balance).to.equal(100);
    expect(testBankAccount.withdrawal).to.equal(0);
  });

  it("adds the fullName method to all bank accounts", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100);
    expect(testBankAccount.fullName()).to.equal("Nata Miller");
  });

  it("returns the remaining balance on the account", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100);
    expect(testBankAccount.remainingBalance()).to.equal(100);
  });

  // it("returns the remaining balance")
});
