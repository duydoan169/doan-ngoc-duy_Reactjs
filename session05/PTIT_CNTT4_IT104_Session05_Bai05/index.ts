class Rectangle{
    private width: number;
    private height: number;

    constructor(width: number, height: number){
        this.width=width;
        this.height=height;
    }
    calcArea(){
        return this.height*this.width;
    }
    calcPerimeter(){
        return 2*(this.width+this.height);
    }
    set resizeWidth(width: number){
        this.width=width;
    }
    set resizeHeight(height: number){
        this.height=height;
    }
    printStats(){
        console.log(`Width: ${this.width}, Height: ${this.height}, Area: ${this.calcArea()}, Perimeter: ${this.calcPerimeter()}`);
    }
}
let rectangle= new Rectangle(5, 6);
rectangle.printStats();
rectangle.resizeHeight=2;
rectangle.resizeWidth=3;
rectangle.printStats();
