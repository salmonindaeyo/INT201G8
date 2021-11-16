import {product} from './product.js'

window.onload = startup;

const divProductsEle = document.querySelector('#products');
const answers = document.querySelectorAll("#fname")

let divProductsEleShow = document.createElement('div') ;

function startup () {
    CreateCard(product)
    countCart();
    CheckProduct();
}


const answers2 = document.querySelectorAll("#fname2")    //รับคำตอบ search

answers2.forEach((answers2) => {
    answers2.addEventListener('change',phoneSearch3);
})


function phoneSearch3 () {

    answers2.forEach((answers2)=>{
        
       var data = searchData(answers2.value , product)
        console.log(data.length)

        if(!(data.length==0)){
            divProductsEleShow.remove();
            CreateCard(data)
        }else
        divProductsEleShow.remove();
        
        if(data.length==0) {
            startup ()
        }
                    
    })
}



function searchData(value , data) {         //หาชื่อใน product
    var filterData = []
    
        for (var i = 0; i < data.length; i++) {
            value = value.toLowerCase();
            var name = data[i].name.toLowerCase();

            if (name.includes(value) & !(value =='')) {
                filterData.push(data[i])
            }
            
        }


    return filterData
}



function CreateCard(data) { 
    
    divProductsEleShow = document.createElement('div');

for (let i = 0; i < data.length; i++) {
  
const divProduct = document.createElement('div');
divProduct.setAttribute('class', "card");

const productImg = document.createElement('img');
productImg.setAttribute('src', data[i].id+".jpg");
productImg.setAttribute('width', "200");

const productName = document.createElement('h1');
productName.textContent = data[i].name ;

const productPrice = document.createElement('p');
productPrice.setAttribute('class', "price");

productPrice.textContent = "$ " + data[i].price ;

const productColor = document.createElement('p');
productColor.textContent = "The color of this phone is " + data[i].color;

const productStock = document.createElement('p');
productStock.textContent = "Still have "+ data[i].stock + " units for sale.";

const buttonProduct = document.createElement('button');
buttonProduct.textContent = "Add to Cart" ;
buttonProduct.setAttribute('id', data[i].id);
buttonProduct.onclick = function (event) {
            Cart.push(event.target.id)
            console.log(Cart)
            countCart();
    }

divProduct.appendChild(productImg);
divProduct.appendChild(productName);
divProduct.appendChild(productPrice);
divProduct.appendChild(productColor);
divProduct.appendChild(productStock);
divProduct.appendChild(buttonProduct);

divProductsEleShow.appendChild(divProduct);
divProductsEle.appendChild(divProductsEleShow);
}
}




let Cart = [];

function  countCart () {
    
    let countCart = document.querySelector("#countCart") ;

    countCart.textContent = Cart.length;

}


function CheckProduct() {

    let CheckProduct = document.querySelector("#CheckProduct")

    CheckProduct.onclick = function () {


    if(Cart.length==0){
        alert("ไม่มีสินค้า")
    }else
         alert(Cart)
}

    
}

