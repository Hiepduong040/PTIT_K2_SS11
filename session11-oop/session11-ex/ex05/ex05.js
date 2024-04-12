"use strict";
class PersonEmployee {
    //muốn dùng thuộc tính private cho class con thì phải dùng getter và setter 
    // ví dụ:
    get getPhone() {
        return this.phone;
    }
    set setPhone(value) {
        this.phone = value;
    }
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
class PersonManager extends PersonEmployee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log("Đã ghi đè", super.printInfo());
        return "đã ghi đè";
    }
}
let manager = new PersonManager("Hiep", "TAN HIEP PHAT", 123, 10);
manager.printInfo();
