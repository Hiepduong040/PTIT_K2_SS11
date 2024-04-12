"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log("name:", this.name);
        console.log("price:", this.price);
    }
}
class Electronics extends Product {
    constructor(name, price, brand) {
        super(name, price);
        this.brand = brand;
    }
    getDescription() {
        super.getDescription();
        console.log("brand:", this.brand);
    }
}
let product = new Electronics("Iphone", 1000, "Apple");
product.getDescription();
