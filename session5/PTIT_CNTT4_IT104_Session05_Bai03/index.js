var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("Name: ".concat(this.name, ", Company: ").concat(this.company, ", phone: ").concat(this.phone));
    };
    return Employee;
}());
var employee = new Employee("duy", "MaesiProduction", "0987654321");
employee.printInfo();
