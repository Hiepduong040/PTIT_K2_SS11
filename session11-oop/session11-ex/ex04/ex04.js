"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed = this.speed - 10;
        return `${this.name} đã giảm tốc về ${this.speed} km/h`;
    }
    speedUp() {
        this.speed = this.speed + 10;
        return `${this.name} đã tăng tốc lên ${this.speed} km/h`;
    }
    showSpeed() {
        return `${this.name} đang có tốc độ là: ${this.speed} km/h`;
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bike = new Bicycle("kawasaki ninja h2r", 400, 1, 1);
console.log(bike.slowDown());
console.log(bike.speedUp());
console.log(bike.showSpeed());
console.log(bike.speedUp());
