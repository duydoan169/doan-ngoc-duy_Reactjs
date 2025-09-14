"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 5;
    }
    slowDown() {
        this.speed -= 5;
    }
    stop() {
        this.speed = 0;
    }
    showSpeed() {
        console.log(`Speed: ${this.speed}`);
    }
}
let car = new Vehicle(50);
car.showSpeed();
car.speedUp();
car.showSpeed();
car.slowDown();
car.showSpeed();
car.stop();
car.showSpeed();
