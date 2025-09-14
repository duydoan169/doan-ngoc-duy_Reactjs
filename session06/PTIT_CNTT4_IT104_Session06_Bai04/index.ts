interface Geometry{
    calculateArea(): void;
    calculatePerimeter(): void;
}
class Circle implements Geometry{
    private radius: number;
    
    constructor(radius: number){
        this.radius=radius;
    }
    calculateArea(): void {
        console.log(`Circle area: ${(Math.PI*this.radius*this.radius).toFixed(1)}`);
    }
    calculatePerimeter(): void {
        console.log(`Circle perimeter: ${(2*Math.PI*this.radius).toFixed(1)}`);
    }
}
class Rectangle implements Geometry{
    private width: number;
    private height: number;

    constructor(width: number, height: number){
        this.width=width;
        this.height=height;
    }

    calculateArea(): void {
        console.log(`Rectangle area: ${this.width*this.height}`);
    }
    calculatePerimeter(): void {
        console.log(`Rectangle perimeter: ${2*(this.width+this.height)}`);
    }
}
let circle = new Circle(3);
let rectangle = new Rectangle(4, 5);
circle.calculateArea();
circle.calculatePerimeter();
rectangle.calculateArea();
rectangle.calculatePerimeter()