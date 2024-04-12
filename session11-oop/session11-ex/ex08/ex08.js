"use strict";
class CheckingAccount extends Account {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            if (amount <= this.balance) {
                this.balance -= amount;
            }
            else {
                const remainingOverdraft = amount - this.balance;
                this.balance = 0;
                console.log("Rút khỏi giới hạn thấu chi:", remainingOverdraft);
            }
        }
        else {
            return "Số tiền rút tiền vượt quá giới hạn thấu chi";
        }
    }
}
const checkingAccount = new CheckingAccount("C-001", 5000, 1000);
checkingAccount.withdraw(6000);
checkingAccount.withdraw(8000);
