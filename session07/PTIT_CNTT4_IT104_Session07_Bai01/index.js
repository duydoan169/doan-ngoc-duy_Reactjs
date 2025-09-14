var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("name: ".concat(this.name, ", company: ").concat(this.company, ", phone: ").concat(this.phone));
    };
    Employee.prototype.getPhone = function () {
        return this.phone;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, company, phone, teamSize) {
        var _this = _super.call(this, name, company, phone) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.printInfo = function () {
        console.log("name: ".concat(this.name, ", company: ").concat(this.company, ", phone: ").concat(this.getPhone(), ", teamSize: ").concat(this.teamSize));
    };
    return Manager;
}(Employee));
var manager = new Manager("nguyen van a", "dcomIndustry", "0987654321", 5);
manager.printInfo();
