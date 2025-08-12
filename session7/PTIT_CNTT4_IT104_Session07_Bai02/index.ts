class Vehicle{
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number){
        this.name=name;
        this.id=id;
        this.speed=speed;
    }
    slowDown(num: number){
        this.speed-=num;
    }
    speedUp(num: number){
        this.speed+=num;
    }
    showSpeed(){
        console.log(`speed: ${this.speed}`);   
    }
}
class Bicycle extends Vehicle{
    private gear: number;

    constructor(name: string, speed: number, id: number, gear: number){
        super(name, speed, id);
        this.gear=gear;
    }
    showInfo(){
        console.log(`Name: ${this.name}, Speed: ${this.speed}, Id: ${this.id}, Gear: ${this.gear}`);
        
    }
}
let bicycle=new Bicycle("xe dap 3 banh", 100, 1, 10);
bicycle.showInfo();
bicycle.speedUp(50);
bicycle.showSpeed();
bicycle.slowDown(120);
bicycle.showSpeed();