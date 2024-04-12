class Account {
    protected accountNumber: string;
    protected balance: number;
  
    constructor(accountNumber: string, balance: number) {
      this.accountNumber = accountNumber;
      this.balance = balance;
    }
  
    deposit(amount: number): void {
      this.balance += amount;
    }
  
    withdraw(amount: number): void | string {
      if (amount <= this.balance) {
        this.balance -= amount;
      } 
    }
  }
  
  class SavingsAccount extends Account {
    private interestRate: number;
  
    constructor(accountNumber: string, balance: number, interestRate: number) {
      super(accountNumber, balance);
      this.interestRate = interestRate;
    }
  
    calculateInterest(): number {
      return this.balance * this.interestRate;
    }
  }
  const savingsAccount = new SavingsAccount("S-001", 5000, 0.05);
  const monthlyInterest = savingsAccount.calculateInterest();
  console.log("Lãi suất hàng tháng:", monthlyInterest);
  savingsAccount.deposit(2000);
  const updatedMonthlyInterest = savingsAccount.calculateInterest();
  console.log("Cập nhật tiền lãi hàng tháng:", updatedMonthlyInterest);