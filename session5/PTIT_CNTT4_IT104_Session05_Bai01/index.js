var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.printVehicle = function () {
        console.log("Name: ".concat(this.name, ", Year: ").concat(this.year, ", Company: ").concat(this.company));
    };
    return Vehicle;
}());
var vehicle1 = new Vehicle("Civic", 2020, "Honda");
var vehicle2 = new Vehicle("Camry", 2021, "Toyota");
vehicle1.printVehicle();
vehicle2.printVehicle();
