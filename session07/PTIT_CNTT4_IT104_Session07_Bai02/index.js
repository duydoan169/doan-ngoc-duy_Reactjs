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
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, id) {
        this.name = name;
        this.id = id;
        this.speed = speed;
    }
    Vehicle.prototype.slowDown = function (num) {
        this.speed -= num;
    };
    Vehicle.prototype.speedUp = function (num) {
        this.speed += num;
    };
    Vehicle.prototype.showSpeed = function () {
        console.log("speed: ".concat(this.speed));
    };
    return Vehicle;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name, speed, id, gear) {
        var _this = _super.call(this, name, speed, id) || this;
        _this.gear = gear;
        return _this;
    }
    Bicycle.prototype.showInfo = function () {
        console.log("Name: ".concat(this.name, ", Speed: ").concat(this.speed, ", Id: ").concat(this.id, ", Gear: ").concat(this.gear));
    };
    return Bicycle;
}(Vehicle));
var bicycle = new Bicycle("xe dap 3 banh", 100, 1, 10);
bicycle.showInfo();
bicycle.speedUp(50);
bicycle.showSpeed();
bicycle.slowDown(120);
bicycle.showSpeed();
