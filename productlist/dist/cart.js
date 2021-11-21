// *** แก้จาก cart ที่เป็น object ทำเป็น class แทน
class Cart{
    constructor(){
        this._productId = [];
        this._product = [];
        this._totalQTY = 0
    }
    
    addQTY(){
        this._totalQTY++;
    }
    get productId(){
        return this._productId;
    }
    get product(){
        return this._product;
    }
    get totalQTY(){
        return this._totalQTY;
    }
    set productId(newProductId){
        this._productId = newProductId;
    }
    set product(newProduct){
        this._product = newProduct;
    }
    set totalQTY(newQTY){
        this._totalQTY = newQTY;
    }

    resetCart(){
        this.productId = [];
        this.product= [];
        this.totalQTY= 0;
    }
    
}
let cart = new Cart();
export {cart}