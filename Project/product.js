function product (id,name,color,price,stock) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.price = price;
    this.stock = stock;
}
let products = []

let product1 = new product("I001","Iphone13Pro","Blue",1290,10);
let product2 = new product("I002","Iphone13mini","Red",1200,7);
let product3 = new product("I003","Iphone12","Purple",730,11);
let product4 = new product("I004","IphoneSE","White",496,12);
let product5 = new product("I005","Iphone11","Black",650,9);
let product6 = new product("I006","Iphone11 Pro Max","Gold",1000,10);


products.push(product1,product2,product3,product4,product5,product6);

export {products as product};