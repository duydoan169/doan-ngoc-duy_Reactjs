"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        console.log(`Circle area: ${(Math.PI * this.radius * this.radius).toFixed(1)}`);
    }
    calculatePerimeter() {
        console.log(`Circle perimeter: ${(2 * Math.PI * this.radius).toFixed(1)}`);
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        console.log(`Rectangle area: ${this.width * this.height}`);
    }
    calculatePerimeter() {
        console.log(`Rectangle perimeter: ${2 * (this.width + this.height)}`);
    }
}
let circle = new Circle(3);
let rectangle = new Rectangle(4, 5);
circle.calculateArea();
circle.calculatePerimeter();
rectangle.calculateArea();
rectangle.calculatePerimeter();
