abstract class Shape {
    protected name: string;
    constructor(name: string) {
        this.name=name;
    }
    get getName(){
        return this.name;
    }
    abstract getSize(): void;
}
class Rectangle extends Shape{
    protected width: number;
    protected height :number;

    constructor(name: string, width: number, height: number){
        super(name);
        this.height=height;
        this.width=width;
    }
    getSize(): void {
        console.log(`name: ${this.getName}, width: ${this.width}, height: ${this.height}`);
        
    }
}
let rectangle= new Rectangle("rectangle", 20, 30);
rectangle.getSize();