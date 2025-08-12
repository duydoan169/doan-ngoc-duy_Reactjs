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
let savingAccount=new SavingAccount(1, 100000, [], "hoat dong", 0.05);
savingAccount.deposit(50000);
savingAccount.withdraw(25000);
savingAccount.showHistory();
savingAccount.withdraw(100000000000);