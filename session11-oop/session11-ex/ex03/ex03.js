"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("Tên ngươi dùng", this.name);
        return `tên người dùng ${this.name}`;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
}
let std1 = new Student(1, "Hiep");
std1.displayInfo();
