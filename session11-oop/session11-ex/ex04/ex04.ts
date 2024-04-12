class Vehicle {
    protected name:string;
    protected speed:number;
    protected id: number
    constructor(name:string,speed:number,id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown():string{
        this.speed = this.speed - 10;
        return `${this.name} đã giảm tốc về ${this.speed} km/h`;

    }
    speedUp():string{
        this.speed = this.speed + 10;
        return `${this.name} đã tăng tốc lên ${this.speed} km/h`;

    }
    showSpeed():string{
        return `${this.name} đang có tốc độ là: ${this.speed} km/h`;
    }
}

class Bicycle extends Vehicle {
    private gear :number;
    constructor (name:string,speed:number,id:number,gear:number){
        super(name,speed,id);
        this.gear = gear;
    }
}

let bike = new Bicycle("kawasaki ninja h2r",400,1,1);
console.log(bike.slowDown());
console.log(bike.speedUp());
console.log(bike.showSpeed());
console.log(bike.speedUp());


