import { products } from "./product.js";

//### Create cart Object ###
let cart = {
    productId: [],
    product: [],
    totalQTY: 0
}

//------------------------------------------------------------------//

//### Create search bar ###
const menubar = document.querySelector('#menubar');
const search = document.querySelector('#search-input');
search.setAttribute('class', 'mt-10');

const input = document.createElement('input');
input.className = 'border-1 rounded-full border-black-400 border-solid mx-4 px-3 py-2 focus:border-green-400 items-center focus:outline-none';
input.setAttribute('placeholder', 'Search');

const searchButton = document.createElement('button');
searchButton.className = 'shadow-lg py-2 px-4 bg-white-500 rounded-full font-medium hover:bg-black hover:text-white active:border-blue-700'
searchButton.innerHTML = 'Search'

search.appendChild(input);
search.appendChild(searchButton);
menubar.appendChild(search);

//------------------------------------------------------------------//

//### Create cart ###
const cartbar = document.querySelector('#cart');
cartbar.className = ''
const cartImg = document.createElement('img');
const numOfItems = document.createElement('p');
numOfItems.textContent = `Items in Cart: ${cart.totalQTY}`;
numOfItems.className = 'my-5'

cartbar.appendChild(cartImg);
cartbar.appendChild(numOfItems);
menubar.appendChild(cartbar);

//------------------------------------------------------------------//

//Clear cart
const clearButton = document.createElement('button');
//cart

//------------------------------------------------------------------//


//### Add search bar event ###
const searchEvent = input.addEventListener('keyup', (event) => {
    let searchTarget = event.target.value.toLowerCase();
    const searchEnter = searchButton.addEventListener('click', (e) => {
        let search = products.filter(search => {
            return search.name.toLowerCase().trim().includes(searchTarget);
        });
        showProduct(search);
    });
    if (event.target.value === "") {
        showProduct(products);
    }
    console.log(event);
})

//-------------------------------------------------------------------//



//### Show all product ###
function showProduct(p) {
    document.getElementById('products').innerHTML = "";
    p.forEach(product => {
        const divProductEle = document.querySelector('#products');
        const productDiv = document.createElement('div')
        productDiv.id = product.id;
        productDiv.className = 'shadow-lg rounded-lg py-10 px-10 inline-block w-auto';

        const picDiv = document.createElement('div')
        picDiv.className = 'mb-10';

        const productImg = document.createElement('img')
        productImg.src = product.url;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price + " Bath";
        productPrice.className = 'font-black'

        const productStock = document.createElement('p')
        productStock.textContent = `Stock: ${product.stock}`;
        productStock.className = 'text-green-300'

        const butDiv = document.createElement('div')
        butDiv.className = 'text-center';
        let button = document.createElement('button');
        button.innerHTML = "Buy"
        button.setAttribute('class', 'shadow-lg py-2 px-5 bg-green-500 hover:bg-green-700 rounded-full font-medium text-white justify-items-center')

        //### Add event button ###
        button.addEventListener('click', (e) => {
            if (!cart.productId.includes(product.id)) {
                cart.productId.push(product.id);
                cart.product.push({ name: product.name, qty: 0 });
            }
            cart.product.forEach((p) => {
                p.name == product.name ? p.qty++ : p.qty;
            });
            cart.totalQTY++;
            alert(`${product.name} `)
            numOfItems.textContent = `Items in cart: ${cart.totalQTY}`;
            console.log(cart);
        })

        //-------------------------------------------------------------------//

        picDiv.appendChild(productImg)
        productDiv.appendChild(picDiv);
        productDiv.appendChild(productName);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productStock)
        butDiv.appendChild(button)
        productDiv.appendChild(butDiv);
        divProductEle.appendChild(productDiv);
    });
}

showProduct(products)