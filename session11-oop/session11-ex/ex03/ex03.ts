class Person {
    public name: string;
    constructor(name:string){
        this.name= name;
    }
    displayInfo():string{
        console.log("Tên ngươi dùng",this.name);
        return `tên người dùng ${this.name}`
    }

}

class Student extends Person{
    public id: number;
    constructor(id:number, name:string){
        super(name);
        this.id = id;
    }
}

let std1 = new Student(1,"Hiep")
std1.displayInfo();
