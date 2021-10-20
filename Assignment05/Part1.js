//1.Higher-Order Functions >> รับ param เป็น fn || return เป็น fn 
let listCoffee = ['Americano','Cappuccino','Espresso','Latte','Mocha'];
//Higher-Order Functions
function excute(array,fn,other){
    return fn(array,other);
}
//Other function
    //นับจำนวนสมาชิกใน array
    let countElement = (x)=> x.length;

    //เพิ่มสมาชิกใน array
    let addElement = function(array,newProduct){
        array.push(newProduct);
        return array;
    }
    //ค้นหาสมาชิกใน array ตาม keyword
    let searchName = function(array,keyword){
        return array.find((name)=>name === keyword);
    }

console.log(excute(listCoffee,countElement));       //มีทั้งหมด 5 ชิ้น 
console.log(excute(listCoffee,addElement,'Tea'));   //เพิ่ม Tea ใน listCoffee
console.log(excute(listCoffee,searchName,'Espresso'));  //ค้นหาชื่อ Espresso ใน listCoffee
console.log(excute(listCoffee,countElement));       //มีทั้งหมด 6 ชิ้น

//2.Closure + Rest parameters
//Outer Function
function createProduct(){
    let products = [];  //สร้าง Array เปล่า ไว้เก็บcollectionของสินค้า
    //Inner Function
    function addNewProduct(ids,name,price,...description){ //'...description' คือ rest parameter
        //set ค่า parameter ทั้งหมดลงใน object
        let newProduct = {};
        newProduct.id = ids;
        newProduct.name = name;
        newProduct.price = Number(price);
        newProduct.detail = description;
        
        //เช็คว่าสินค้าใหม่ที่เพิ่มนี้มี id ที่ซ้ำกันหรือไม่ ถ้าไม่ซ้ำจะเพิ่มสินค้านี้ใน products
        let findProduct = products.find(({id})=>id === ids); 
        if(findProduct===undefined){
            products.push(newProduct);
        }
        return products;    //return สินค้าทั้งหมด
    }
    return addNewProduct;   //<---Closure : เรียกชื่อ Inner Function 
    //Closure จะช่วยให้เพิ่มสินค้าใหม่ใน array เดิมได้ (เป็นค่าสะสะมไปเรื่อยๆ)
}
//การเรียกใช้ Closure จะเรียกจาก Outer function
let iPhone = createProduct();
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Pink');
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Red'); //สินค้านี้ไม่ถูกเพิ่ม เพราะเลข id ซ้ำ
iPhone(120,'iphone 12',29900,'RAM 4GB','ROM 64GB','4G','Grey');
iPhone(122,'iphone 12 Pro',36100,'RAM 6GB','ROM 128GB','4G','Black');
console.log(iPhone(132,'iphone 13 Pro',38900,'RAM 6GB','ROM 128GB','5G','Blue')); //สุดท้ายมีสินค้าทั้งหมด 4 ชนิด

/* สินค้าทั้งหมดของ iPhone
[   {id: 110, name: 'iPhone 11', price: 24900, detail: [ 'RAM 4GB', 'ROM 64GB', '4G', 'Pink' ]},
    {id: 120, name: 'iPhone 12', price: 29900, detail: [ 'RAM 4GB', 'ROM 64GB', '4G', 'Grey' ]},
    {id: 122, name: 'iPhone 12 Pro', price: 36100, detail: [ 'RAM 6GB', 'ROM 128GB', '4G', 'Black' ]},
    {id: 132, name: 'iphone 13 Pro', price: 38900, detail: [ 'RAM 6GB', 'ROM 128GB', '5G', 'Blue' ]}
  ]*/

//3.Default parameter >> กำหนดค่าใน param 
//function คำนวณราคารวมของสินค้า
function findTotal(price=0,quantity=1){ //ถ้าไม่มีส่งค่า parameter มา จะกำหนดค่าเริ่มต้นให้ price=0 และ quantity=1
    return price*quantity;
}
console.log(findTotal(150,4));  //600 ()
console.log(findTotal(200));    //200 (มาจาก 200*1 โดย price=200 แต่ 1 คือ ค่าเริ่มต้นของ quantity)
console.log(findTotal());       //0 (มาจาก 0*1 ที่ได้จากค่าเริ่มต้นของ price*quantity)


//4.Arguments in function >> เรียก parameter ที่ซ่อนอยู่ทั้งหมด เป็น parameter ที่ไม่มีใน funciton
//function เพิ่มสินค้าลงตะกร้า
function busket() {
    let userBusket = [];    //สร้าง Array เปล่า ไว้เตรียมเก็บของ
  
    function addToBusket() {
        //เพิ่มสินค้าทั้งหมดลงตะกร้า โดยการเรียกดู arguments parameter ทั้งหมดมาเพิ่มใน userBusket
        for (let i = 0; i < arguments.length; i++) {
            userBusket.push(arguments[i]);
        }
        return userBusket;
    }
    return addToBusket;
 }
  
 const user = busket();
 console.log(user('Phone13','Macbook Pro'));
 console.log(user('Apple Watch', 'Ipad mini'));
