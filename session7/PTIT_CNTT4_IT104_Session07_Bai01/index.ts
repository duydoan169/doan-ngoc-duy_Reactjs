class Employee{
    name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    printInfo(){
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.phone}`);
    }
    getPhone(){
        return this.phone;
    }
}
class Manager extends Employee{
    teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone)
        this.teamSize=teamSize;
    }
    printInfo(): void {
        console.log(`name: ${this.name}, company: ${this.company}, phone: ${this.getPhone()}, teamSize: ${this.teamSize}`);
    }
}
let manager= new Manager("nguyen van a", "dcomIndustry", "0987654321", 5);
manager.printInfo();