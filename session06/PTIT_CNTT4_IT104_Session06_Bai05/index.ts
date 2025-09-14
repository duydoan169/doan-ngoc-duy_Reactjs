interface changeSpeed{
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle implements changeSpeed{
    private speed: number;

    constructor(speed: number){
        this.speed=speed;
    }
    speedUp(): void {
        this.speed+=5;
    }
    slowDown(): void {
        this.speed-=5;
    }
    stop(): void {
        this.speed=0;
    }
    showSpeed(){
        console.log(`Speed: ${this.speed}`);
    }
}
let car=new Vehicle(50);
car.showSpeed();
car.speedUp();
car.showSpeed();
car.slowDown();
car.showSpeed();
car.stop();
car.showSpeed();