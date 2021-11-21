// *** แก้จาก product ที่เป็น object ปกติทั่วไป ทำเป็น class แทน
class Product {
    constructor(id,name,price,stock,url){
        this._id = id;
        this._name = name;
        this._price = price;
        this._stock = stock;
        this._url = url;
    }
    get id() {
        return this._id;
        }
        get name() {
        return this._name;
        }
        get price() {
        return this._price;
        }
        get stock() {
        return this._stock;
        }
        get url() {
        return this._url;
        }
    
    removeStock(){
        this._stock--;
    }
} 

let product = [
    new Product("P1","iPhone 13","29,000",30,"../img/iphone-13.jpg"),
    new Product("P2","iPhone 12","24,000",10,"../img/iphone-12.png"),
    new Product("P3","iPhone 11","19,000",2,"../img/iphone11.jpg"),
    new Product("P4","iPhone SE","15,000",5,"../img/iphone-se.jpg"),
    new Product("P5","iPhone X","14,000",7,"../img/iphonex.jpg")

];

export { product as products };
