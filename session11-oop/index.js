"use strict";
console.log("indereitance!");
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log(`hello ${this.userName}`);
    }
}
class Child extends Parent {
    constructor(a, b, address) {
        super(a, b);
        this.userName = a;
        this.password = b;
        this.address = address;
    }
    sayGoodbye() {
        console.log("tạm biệt");
        return "tạm biệt";
    }
}
let child1 = new Child("minh", "123", "hà nội");
child1.sayHello();
class Child1 extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
    //overite : ghi đè phương thức
    sayGoodbye() {
        console.log("Không tạm biệt", super.sayGoodbye());
        return "không tạm biệt";
    }
}
let child11 = new Child1("hồng", "111", "hcm");
child11.sayHello();
child11.sayGoodbye();
