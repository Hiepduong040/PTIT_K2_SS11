"use strict";
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    calculateInterest() {
        return this.balance * this.interestRate;
    }
}
const savingsAccount = new SavingsAccount("S-001", 5000, 0.05);
const monthlyInterest = savingsAccount.calculateInterest();
console.log("Lãi suất hàng tháng:", monthlyInterest);
savingsAccount.deposit(2000);
const updatedMonthlyInterest = savingsAccount.calculateInterest();
console.log("Cập nhật tiền lãi hàng tháng:", updatedMonthlyInterest);
