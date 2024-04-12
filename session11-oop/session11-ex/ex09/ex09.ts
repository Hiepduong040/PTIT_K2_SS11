class Shape {
    calculateArea(): number;
    calculateArea(width: number, height: number): number;
    calculateArea(radius: number): number;
    calculateArea(widthOrRadius?: number, height?: number): number {
      if (typeof widthOrRadius === "number" && typeof height === "number") {
        return widthOrRadius * height;
      } else if (typeof widthOrRadius === "number") {
        return Math.PI * widthOrRadius * widthOrRadius;
      } else {
        throw new Error("Invalid arguments");
      }
    }
  }
  
  class Rectangle extends Shape {
    private width: number;
    private height: number;
  
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
  
    calculateArea(): number {
      return super.calculateArea(this.width, this.height);
    }
  }
  
  class Circle extends Shape {
    private radius: number;
  
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
  
    calculateArea(): number {
      return super.calculateArea(this.radius);
    }
  }
  const rectangle = new Rectangle(4, 5);
  const rectangleArea = rectangle.calculateArea();
  console.log("Rectangle Area:", rectangleArea);
  const circle = new Circle(3);
  const circleArea = circle.calculateArea();
  console.log("Circle Area:", circleArea);