var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calcArea = function () {
        return this.height * this.width;
    };
    Rectangle.prototype.calcPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Object.defineProperty(Rectangle.prototype, "resizeWidth", {
        set: function (width) {
            this.width = width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "resizeHeight", {
        set: function (height) {
            this.height = height;
        },
        enumerable: false,
        configurable: true
    });
    Rectangle.prototype.printStats = function () {
        console.log("Width: ".concat(this.width, ", Height: ").concat(this.height, ", Area: ").concat(this.calcArea(), ", Perimeter: ").concat(this.calcPerimeter()));
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 6);
rectangle.printStats();
rectangle.resizeHeight = 2;
rectangle.resizeWidth = 3;
rectangle.printStats();
