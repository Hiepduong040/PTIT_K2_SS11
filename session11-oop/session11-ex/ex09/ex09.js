"use strict";
class Shape {
    calculateArea(widthOrRadius, height) {
        if (typeof widthOrRadius === "number" && typeof height === "number") {
            return widthOrRadius * height;
        }
        else if (typeof widthOrRadius === "number") {
            return Math.PI * widthOrRadius * widthOrRadius;
        }
        else {
            throw new Error("Invalid arguments");
        }
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return super.calculateArea(this.width, this.height);
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return super.calculateArea(this.radius);
    }
}
const rectangle = new Rectangle(4, 5);
const rectangleArea = rectangle.calculateArea();
console.log("Rectangle Area:", rectangleArea);
const circle = new Circle(3);
const circleArea = circle.calculateArea();
console.log("Circle Area:", circleArea);
