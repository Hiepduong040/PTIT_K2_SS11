class Product {
    protected name : string;
    protected price: number;
    constructor (name: string,price:number){
        this.name = name;
        this.price = price;
    }
    public getDescription (): void {
        console.log("name:",this.name);
        console.log("price:",this.price);
        

    }
}

class Electronics extends Product{
    private brand: string;
    constructor(name:string, price:number, brand: string){
        super(name,price);
        this.brand = brand;
    }
    public getDescription(): void {
        super.getDescription();
        console.log("brand:",this.brand);
        

    }
}

let product = new Electronics("Iphone",1000,"Apple");
product.getDescription();