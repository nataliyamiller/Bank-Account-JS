describe('BankAccount', function() {
  it("creates a new bank account for the user with the given data", function() {
    var testBankAccount = new BankAccount("Nata", "Miller", 100)
    expect(testBankAccount.firstName).to.equal("Nata");
    expect(testBankAccount.lastName).to.equal("Miller");
    expect(testBankAccount.initialDeposit).to.equal(100);
    expect(testBankAccount.withdrawal).to.equal(0);
  });
});