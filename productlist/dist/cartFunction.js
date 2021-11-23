import { cart } from "./cart.js";
import { numOfItems} from "./main.js";

//**เปลี่ยนชื่อ script.js เป็น cartFunction.js */

//// ## เวลาเข้าเว็บใหม่ เข้าไปเช็คใน local 
export function checkCart(){
    let cartId = localStorage.getItem('cartId');
    let cartQTY = localStorage.getItem('cartQTY');
    let myCart = localStorage.getItem('myCart');
    if(cartId==null){     //ถ้าใน local ไม่มีตะกร้าก็ไม่ต้องทำอะไร 
        return cart;
    }else{
        cart.productId = cartId.split(",");     //ดึงข้อมูลจากใน local
        cart.product = JSON.parse(myCart);  
        cart.totalQTY = cartQTY;
        return cart;
    }
}
// ## เวลากดที่กระเป๋า จะแสดงจำนวนสินค้า
export function viewCart(){
    checkCart();
    let text = '';
    cart.totalQTY != 0 ? text = '' : text = '--No Product--';
    cart.product.forEach((p) => {
        text = text + '\n' + `${p.name}, qty: ${p.qty}`;
    });
    alert('Your products in cart now'+'\n'+text);
};

export function clearCart(){
    cart.resetCart();
    console.log(cart);
    numOfItems.textContent = ` Items in cart: ${cart.totalQTY} `;
    localStorage.clear();
}
