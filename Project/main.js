import {product} from './product.js'
const divProductsEle = document.querySelector('#products');


for (let i = 0; i < product.length; i++) {
const divProduct = document.createElement('div');
divProduct.setAttribute('id', product[i].id);

const productId = document.createElement('p');
productId.textContent = product[i].id;

const productName = document.createElement('p');
productName.textContent = product[i].name;

const productPrice = document.createElement('p');
productPrice.textContent = product[i].price + "Bath";

const productColor = document.createElement('p');
productColor.textContent = product[i].color;

const productStock = document.createElement('p');
productStock.textContent = product[i].stock;

//<div><p></div>
divProduct.appendChild(productId);
divProduct.appendChild(productName);
divProduct.appendChild(productPrice);
divProduct.appendChild(productColor);
divProduct.appendChild(productStock);
divProductsEle.appendChild(divProduct);
}