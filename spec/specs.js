describe('BankAccount', function() {
  it("creates a new bank account for the user with the given data", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100)
    expect(testBankAccount.firstName).to.equal("Nata");
    expect(testBankAccount.lastName).to.equal("Miller");
    expect(testBankAccount.balance).to.equal(100);
  });

  it("adds the fullName method to all bank accounts", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100);
    expect(testBankAccount.fullName()).to.equal("Nata Miller");
  });

  it("returns the remaining balance after the withdrawal", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100);
    expect(testBankAccount.withdrawMoney(50)).to.equal(50);
    expect(testBankAccount.balance).to.equal(50);
  });

  it("returns a new balance after another deposit has been made", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100);
    expect(testBankAccount.addDeposit(900)).to.equal(1000);
    expect(testBankAccount.balance).to.equal(1000);
  });
});
