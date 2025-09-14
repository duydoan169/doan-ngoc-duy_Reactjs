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
class CheckingAccount extends Account {
    constructor(accountNumber, balance, history, status, overdraftLimit) {
        super(accountNumber, balance, history, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(num) {
        if (this.balance - num >= -this.overdraftLimit) {
            this.balance -= num;
            this.history.push(`withdrew ${num.toLocaleString()}`);
        }
        else {
            console.log("khong du so du TK");
        }
    }
}
let checkingAccount = new CheckingAccount(1, 100000, [], "active", 50000);
checkingAccount.withdraw(150000);
checkingAccount.showHistory();
checkingAccount.withdraw(1);
