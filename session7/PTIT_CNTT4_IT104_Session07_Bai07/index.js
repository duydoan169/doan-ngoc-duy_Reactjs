"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountNumber, balance, history, status) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = history;
        this.status = status;
    }
    deposit(num) {
        this.balance += num;
        this.history.push(`deposited ${num.toLocaleString()}`);
    }
    withdraw(num) {
        if (this.balance - num >= 0) {
            this.balance -= num;
            this.history.push(`withdrew ${num.toLocaleString()}`);
        }
        else {
            console.log("khong du so du tk");
        }
    }
    showHistory() {
        this.history.forEach(element => {
            console.log(element);
        });
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, balance, history, status, interestRate) {
        super(accountNumber, balance, history, status);
        this.interestRate = interestRate;
    }
}
let savingAccount = new SavingAccount(1, 100000, [], "hoat dong", 0.05);
savingAccount.deposit(50000);
savingAccount.withdraw(25000);
savingAccount.showHistory();
savingAccount.withdraw(100000000000);
