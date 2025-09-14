class Vehicle{
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string){
        this.name=name;
        this.year=year;
        this.company=company;
    }
    printVehicle(){
        console.log(`Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
let vehicle1 = new Vehicle("Civic", 2020, "Honda");
let vehicle2 = new Vehicle("Camry", 2021, "Toyota");
vehicle1.printVehicle();
vehicle2.printVehicle();