class Vehicle{
    readonly id: number;
    public name: string;
    protected year: number;
    private company: string;

    constructor(id: number, name: string, year: number, company: string){
        this.id=id;
        this.name=name;
        this.company=company;
        this.year=year;
    }
    printVehicle(){
        console.log(`id: ${this.id}, Name: ${this.name}, Year: ${this.year}, Company: ${this.company}`);
    }
}
let vehicle=new Vehicle(1, "Civic", 2020, "Honda");
vehicle.printVehicle();