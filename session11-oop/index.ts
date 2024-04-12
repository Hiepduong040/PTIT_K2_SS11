console.log("indereitance!");

class Parent{
    userName:string;
    password: string;
    constructor(userName:string,password:string){
        this.userName=userName;
        this.password=password;

    }
    sayHello():void{
        console.log(`hello ${this.userName}`);
        
    }


    //class con muốn kế thừa class cha bắt buộc phải dùng từ khóa extend (kế thừa)
}

class Child extends Parent{
    protected address:string;
    constructor(a:string,b:string,address:string){
        super(a,b);
        this.userName=a;
        this.password=b;
        this.address=address;

    }
    sayGoodbye():string{
        console.log("tạm biệt");
        return "tạm biệt"
    }
}
let child1 = new Child("minh","123","hà nội");
child1.sayHello();
class Child1 extends Child{
    constructor(userName:string,password:string,address:string){
        super(userName,password,address);
        this.userName=userName;
        this.password=password;
        this.address=address;
    }
    //overite : ghi đè phương thức
    sayGoodbye(): string {
        console.log("Không tạm biệt",super.sayGoodbye());
        return "không tạm biệt"
    }
}
let child11 = new Child1("hồng", "111", "hcm")
child11.sayHello();
child11.sayGoodbye();



