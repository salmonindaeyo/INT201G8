function product (id,name,color,price,stock) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.price = price;
    this.stock = stock;
}
let products = []
let product1 = new product("I001","Iphone 13 Pro","Blue",1290,10);
let product2 = new product("I002","Iphone 13 mini","Red",1200,7);
let product3 = new product("I003","Iphone 12","Purple",730,11);



products.push(product1,product2,product3);

export {products as product};