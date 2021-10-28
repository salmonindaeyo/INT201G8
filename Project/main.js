import {product} from './product.js'
const divProductsEle = document.querySelector('#products');


for (let i = 0; i < product.length; i++) {
  
const divProduct = document.createElement('div');
divProduct.setAttribute('class', "card");

const productImg = document.createElement('img');
productImg.setAttribute('src', product[i].id+".jpg");
productImg.setAttribute('width', "200");

const productName = document.createElement('h1');
productName.textContent = product[i].name ;

const productPrice = document.createElement('p');
productPrice.setAttribute('class', "price");

productPrice.textContent = "$ " + product[i].price ;

const productColor = document.createElement('p');
productColor.textContent = "The color of this phone is " + product[i].color;

const productStock = document.createElement('p');
productStock.textContent = "Still have "+ product[i].stock + " units for sale.";

const buttonProduct = document.createElement('button');
buttonProduct.textContent = "Add to Cart" ;

//<div><p></div>

divProduct.appendChild(productImg);
divProduct.appendChild(productName);
divProduct.appendChild(productPrice);
divProduct.appendChild(productColor);
divProduct.appendChild(productStock);
divProduct.appendChild(buttonProduct);
divProductsEle.appendChild(divProduct);
}

// <div class="card">
        
//<h1>Tailored Jeans</h1>
//<p class="price">$19.99</p>
//<p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
//<p><button>Add to Cart</button></p>
//</div>


