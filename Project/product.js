function product (id,name,color,price,stock) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.price = price;
    this.stock = stock;
}
let products = []
let product1 = new product("I6001","iphone6","green",3000,20);
let product2 = new product("I6002","iphone6","white",3000,20);
let product3 = new product("I6003","iphone6","red",3000,20);

products.push(product1,product2,product3);
export {products as product};