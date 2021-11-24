import { products } from "./product.js";
import { cart } from "./cart.js";
import { Cookie } from "./cookie.js";
import { checkCart, clearCart, viewCart} from "./cartFunction.js";
import { inputSearch, buttonSearch} from "./searchFunction.js";

//**เปลี่ยน let เป็น const ทั้งหมดเฉพาะตัวแปรที่เก็บ node ของ document element*

//### Check Cart Item ###
checkCart();

//### Create Item Cart Bar (มีทั้งรูปกระเป๋าไว้ดูสินค้า มีตัวหนังสือแสดงจำนวนในกระเป๋า มีกดเพื่อลบสินค้าในตะกล้า) ###
const cartbar = document.querySelector('#cart');
 
//สร้างกระเป๋าเอาไว้เช็คสินค้า
const cartImg = document.createElement('img');
cartImg.setAttribute('id','icon-bag');
cartImg.setAttribute('src','../img/bag.png');
cartImg.setAttribute('width','25px');
cartImg.setAttribute('height','25px');
cartImg.className = 'inline';

//แสดงจำนวนสินค้าที่อยู่ในกระเป๋า
const numOfItems = document.createElement('p');  
if(localStorage.getItem('cartQTY') == null){
    numOfItems.textContent = `  Items in cart: ${cart.totalQTY}   `; 
}else{
    numOfItems.textContent = `  Items in cart: ${localStorage.getItem('cartQTY')}   `;
}
numOfItems.className = 'inline';

// สร้างไอคอน เคลียตะกร้าสินค้า
const binImg = document.createElement('img');
binImg.setAttribute('id','icon-bin');
binImg.setAttribute('src','../img/bin.png');
binImg.setAttribute('width','25px');
binImg.setAttribute('height','25px');
binImg.className = 'inline my-2 mr-2';

cartbar.appendChild(cartImg);   //เพิ่มกระเป๋าสินค้า
cartbar.appendChild(numOfItems); //เพิ่มตัวหนังสือแสดงจำนวนสินค้า
cartbar.appendChild(binImg);   //เพิ่มที่เคลียสินค้า
//------------------------------------------------------------------//

//## Cookie Button
const cookiesButton = document.createElement('button');
cookiesButton.className = 'shadow-lg my-2 ml-4 mr-8 py-2 px-4 bg-white-500 rounded-full font-medium hover:bg-black hover:text-white active:border-blue-700'
cookiesButton.innerHTML = 'Cookies'
cookiesButton.setAttribute('id', 'cookieTest');
cartbar.appendChild(cookiesButton);

  //### Add Event Cookie ###
cookiesButton.addEventListener('click',function(){
    Cookie.set('cartId', cart.productId);
    Cookie.set('cartQTY', cart.totalQTY);
    alert(`Cookie cart Id : ${Cookie.get('cartId')}`); 
    alert(`Cookie cart QTY: ${Cookie.get('cartQTY')}`);
   
});
//**ย้าย Cookie Class ไปสร้างเป็นไฟล์ใหม่ cookie.js

//------------------------------------------------------------------//
//### Create search bar ###
const divSearchInput = document.querySelector('#search-button');

//สร้างรูปปุ่มค้นหา
const searchImg = document.createElement('img');
searchImg.setAttribute('id','icon-search');
searchImg.setAttribute('src',"../img/search.png");
searchImg.setAttribute('width','25px');
searchImg.setAttribute('height','25px');
searchImg.setAttribute('style','position: absolute; width: 40px; bottom: 15px; left: 190px');

//ช่องที่กรอกข้อความใน search
const input = document.createElement('input');
input.className = 'border-1 rounded-full my-2 border-black-400 border-solid mx-4 px-3 py-2 focus:border-green-400 items-center focus:outline-none';
input.setAttribute('placeholder', 'Search');
input.setAttribute('id', 'searchInput');
input.setAttribute('type', 'hidden');

//ปุ่มกดเพื่อค้นหา
const searchButton = document.createElement('button');
searchButton.className = 'shadow-lg my-2 py-2 px-4 bg-white-500 rounded-full font-medium hover:bg-black hover:text-white active:border-blue-700'
searchButton.innerHTML = 'Search'
searchButton.setAttribute('id', 'search-button');
searchButton.setAttribute('style', 'display: none;');

//### Add Child ###
const iconSearch = document.querySelector('#iconSearch'); //Search icon on nav
iconSearch.appendChild(searchImg); //เพิ่มรูปปุ่มค้นหา
divSearchInput.appendChild(input); //เพิ่มช่องกรอกข้อความ
divSearchInput.appendChild(searchButton); //เพิ่มปุ่มค้นหา

cartbar.className ='mr-80';


//### Add Event Icon Cart ###
cartImg.addEventListener('click', viewCart);

//### Add Event Icon Bin ###
const IconBin = document.querySelector('#icon-bin');
IconBin.addEventListener('click', clearCart);

//### Add Event Icon Search ###
const icon = document.querySelector('#icon-search');
icon.addEventListener('click', function() {
    if (input.getAttribute('type') == "hidden" || searchButton.getAttribute('style')=="display: none;") {
        input.setAttribute('type', "text");
        searchButton.removeAttribute('style');
        
    } else {
        input.setAttribute('type', "hidden");
        searchButton.setAttribute('style', 'display: none;');
    }
});

//### Add Event Searching ###
input.addEventListener('keyup',inputSearch);
//*ปรับแก้ปุ่ม search ให้แล้ว
searchButton.addEventListener('click',buttonSearch);

//-------------------------------------------------------------------//
//### Show all product ###
const divProductEle = document.querySelector('#products'); //**ย้ายบรรทัดนี้ออกมาจาก function showProduct */
export function showProduct(p) {
    document.getElementById('products').innerHTML = "";
    p.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.id = product.name;
        productDiv.className = 'product shadow-lg rounded-lg py-10 px-10 inline-block w-auto';
        productDiv.style.backgroundColor = 'white';

        const picDiv = document.createElement('div')
        picDiv.className = 'mb-10';

        const productImg = document.createElement('img')
        productImg.src = product.url;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price + " Bath";
        productPrice.className = 'font-black';

        const productStock = document.createElement('p')
        productStock.textContent = `Stock: ${product.stock}`;
        productStock.className = 'text-green-300';
        productStock.setAttribute('class', 'stock');

        const buyDiv = document.createElement('div')
        buyDiv.className = 'text-center';

        const button = document.createElement('button');
        button.innerHTML = "Buy"
        button.setAttribute('class', 'shadow-lg py-2 px-5 bg-green-500 hover:bg-green-700 rounded-full font-medium text-white justify-items-center')

        //### Add event button ###
        button.addEventListener('click', () => {
            if (product.stock != 0) {
                if (!cart.productId.includes(product.id)) {
                    cart.productId.push(product.id);
                    cart.product.push({ name: product.name, qty: 0 });
                }
                cart.product.forEach((p) => {
                    p.name == product.name ? p.qty++ : p.qty;
                });
                
                /**เปลี่ยนจาก cart.totalQTY++  เป็นเรียกใช้ fn ใน Cart Class */
                cart.addQTY();
                alert(`${product.name} add to cart!!`)
                numOfItems.textContent = ` Items in cart: ${cart.totalQTY} `;

                products.forEach(p => {
                    if (p.name == product.name) {
                        /**เปลี่ยนจาก p.stock--  เป็นเรียกใช้ fn ใน Product Class */
                        p.removeStock();
                        productStock.textContent = `Stock: ${p.stock}`
                    }
                });
                
                //### localStorage ###
                localStorage.setItem('cartId', cart.productId);
                localStorage.setItem('cartQTY', cart.totalQTY);
                localStorage.setItem('myCart', JSON.stringify(cart.product));
                //----------------------------------------------------------//
                console.log(cart);
            } else {
                alert(`Sorry, this product sold out`);
            }
        });
        //-------------------------------------------------------------------//

//***Add Child */
        picDiv.appendChild(productImg)
        productDiv.appendChild(picDiv);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productStock)
        buyDiv.appendChild(button);
        productDiv.appendChild(buyDiv);
        divProductEle.appendChild(productDiv);
    });
}
showProduct(products);
//-------------------------------------------------------------------//

export {
    numOfItems,          //export to cartFunction.js
    input,divProductEle  //export to searchFunction.js
}
