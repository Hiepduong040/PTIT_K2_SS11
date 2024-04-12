class Employee {
    public name: string;
    protected company: string;
    private phone: number;
    constructor(name:string,company:string,phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;

    }
    printInfo():string{
        console.log("name:",this.name);
        console.log("company:",this.company);
        console.log("phone:",this.phone);
        return "name: "+this.name + " company: "+this.company + " phone: "+this.phone;

    }

}
class Manager extends Employee{
    teamSize:number;
    constructor(name:string,company:string,phone:number,teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    printInfo(): string {
        console.log("Đã ghi đè",super.printInfo());
        return "đã ghi đè"
    }
}

let manager1 = new Manager("Hiep","TAN HIEP PHAT",123,10);
manager1.printInfo();