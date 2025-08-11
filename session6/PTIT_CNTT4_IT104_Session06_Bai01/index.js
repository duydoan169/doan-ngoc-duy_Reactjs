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
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    Object.defineProperty(Shape.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(name, width, height) {
        var _this = _super.call(this, name) || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.getSize = function () {
        console.log("name: ".concat(this.getName, ", width: ").concat(this.width, ", height: ").concat(this.height));
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle("rectangle", 20, 30);
rectangle.getSize();
