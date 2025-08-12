class Account{
    accountNumber: number;
    protected balance: number;
    protected history: string[];
    protected status: string;

    constructor(accountNumber: number, balance: number, history: string[], status: string){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.history=history;
        this.status=status;
    }

    deposit(num: number){
        this.balance+=num;
        this.history.push(`deposited ${num.toLocaleString()}`);
    }
    withdraw(num: number){
        if(this.balance-num>=0){
            this.balance-=num;
            this.history.push(`withdrew ${num.toLocaleString()}`);
        }else{
            console.log("khong du so du tk");
        }
    }
    showHistory(){
        this.history.forEach(element => {
            console.log(element);
        });
    }
}
class SavingAccount extends Account{
    interestRate: number;

    constructor(accountNumber: number, balance: number, history: string[], status: string, interestRate: number){
        super(accountNumber, balance, history, status);
        this.interestRate=interestRate;
    }
}

class CheckingAccount extends Account{
    overdraftLimit: number;
    
    constructor(accountNumber: number, balance: number, history: string[], status: string, overdraftLimit: number){
        super(accountNumber, balance, history, status);
        this.overdraftLimit=overdraftLimit;
    }
    withdraw(num: number): void {
        if(this.balance-num>=-this.overdraftLimit){
            this.balance-=num;
            this.history.push(`withdrew ${num.toLocaleString()}`);
        }else{
            console.log("khong du so du TK");
        }
    }
}
let checkingAccount= new CheckingAccount(1, 100000, [], "active", 50000);
checkingAccount.withdraw(150000);
checkingAccount.showHistory();
checkingAccount.withdraw(1);