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
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    Job.prototype.printType = function () {
        console.log("Type: ".concat(this.type));
    };
    return Job;
}());
var ParttimeJob = /** @class */ (function (_super) {
    __extends(ParttimeJob, _super);
    function ParttimeJob(type, workingHour) {
        var _this = _super.call(this, type) || this;
        _this.workingHour = workingHour;
        return _this;
    }
    ParttimeJob.prototype.calculateSalary = function () {
        console.log("Parttime salary: ".concat((30000 * this.workingHour).toLocaleString()));
    };
    return ParttimeJob;
}(Job));
var FulltimetimeJob = /** @class */ (function (_super) {
    __extends(FulltimetimeJob, _super);
    function FulltimetimeJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FulltimetimeJob.prototype.calculateSalary = function () {
        console.log("Fulltime salary: ".concat((10000000).toLocaleString()));
    };
    return FulltimetimeJob;
}(Job));
var parttimeJob = new ParttimeJob("parttime", 9);
var fulltimeJob = new FulltimetimeJob("fulltime");
parttimeJob.calculateSalary();
fulltimeJob.calculateSalary();
