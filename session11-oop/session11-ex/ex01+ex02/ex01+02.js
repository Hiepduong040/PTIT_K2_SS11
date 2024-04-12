"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log("name:", this.name);
        console.log("company:", this.company);
        console.log("phone:", this.phone);
        return "name: " + this.name + " company: " + this.company + " phone: " + this.phone;
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log("Đã ghi đè", super.printInfo());
        return "đã ghi đè";
    }
}
let manager1 = new Manager("Hiep", "TAN HIEP PHAT", 123, 10);
manager1.printInfo();
