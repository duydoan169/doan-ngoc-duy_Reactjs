var Vehicle = /** @class */ (function () {
    function Vehicle(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.company = company;
        this.year = year;
    }
    Vehicle.prototype.printVehicle = function () {
        console.log("id: ".concat(this.id, ", Name: ").concat(this.name, ", Year: ").concat(this.year, ", Company: ").concat(this.company));
    };
    return Vehicle;
}());
var vehicle = new Vehicle(1, "Civic", 2020, "Honda");
vehicle.printVehicle();
