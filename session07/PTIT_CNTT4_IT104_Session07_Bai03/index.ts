abstract class Animal{
    name: string;

    constructor(name: string){
        this.name=name;
    }
    abstract makeNoise(): void

    printName(){
        console.log(`Name: ${this.name}`);
    }
}
class Cat extends Animal{
    makeNoise(): void {
        console.log("meo meo");
    }
}
class Dog extends Animal{
    makeNoise(): void {
        console.log("gau gau");
    }
}
let cat = new Cat("nguyen van a");
let dog = new Dog("nguyen thi b");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();