class PersonEmployee {
    public name: string;
    protected company: string;// có tính kế thừa, có thể sử dụng cho class con
    private phone: number;// chỉ có thể truy cập trong class và không có tính kế thừa
    //muốn dùng thuộc tính private cho class con thì phải dùng getter và setter 
    // ví dụ:
    get getPhone():number{
        return this.phone;
    }
    set setPhone(value:number){
        this.phone = value;
    }
    
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
class PersonManager extends PersonEmployee{
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

let manager = new PersonManager ("Hiep","TAN HIEP PHAT",123,10);
manager.printInfo();