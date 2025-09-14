class Employee{
    public name: string;
    protected company: string;
    private phone: string;

    constructor(name: string, company: string, phone: string){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    printInfo(){
        console.log(`Name: ${this.name}, Company: ${this.company}, phone: ${this.phone}`);   
    }
}
let employee=new Employee("duy", "MaesiProduction", "0987654321");
employee.printInfo();