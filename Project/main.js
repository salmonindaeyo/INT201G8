import {product} from './product.js'

window.onload = startup;

const divProductsEle = document.querySelector('#products');
const answers = document.querySelectorAll("#fname")
const divSearch = document.querySelector('#search');
let divProductsEleShow;

function startup () {
    divProductsEleShow = document.createElement('div');

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



divProduct.appendChild(productImg);
divProduct.appendChild(productName);
divProduct.appendChild(productPrice);
divProduct.appendChild(productColor);
divProduct.appendChild(productStock);
divProduct.appendChild(buttonProduct);

divProductsEleShow.appendChild(divProduct);
divProductsEle.appendChild(divProductsEleShow);
}

//const divSearch = document.querySelector('#search');

//let inputName = document.createElement("input");
//inputName.setAttribute("type", "text");
//inputName.setAttribute("id", "phoneName");
//inputName.setAttribute("onchange", "phoneSearch");

//divSearch.appendChild(inputName);


 //     let  addButton = document.createElement("input");
 //   addButton.setAttribute("type", "button");
 //   addButton.setAttribute("value", "clear");
 //   addButton.setAttribute("onclick", "ClearPage ()");
  //  document.body.appendChild(addButton);


}


//function ClearPage () {


 //   const testt = document.createElement('h1');
 //   testt.textContent = "555555555" ; 
 //   divSearch.appendChild(testt);
    
//}
    
  
answers.forEach((answers) => {
    answers.addEventListener('change',phoneSearch2);
})


function phoneSearch2 () {

            let CheckAnswer = false;
            let CheckIndex = 0;
        answers.forEach((answers)=>{
            
            for (let i = 0; i < product.length; i++) {
                if (answers.value == product[i].name) {
                    CheckAnswer = true; 
                    CheckIndex = i;
                }
            }
            
        })

        if (CheckAnswer) {
            const divProductSearch = document.querySelector('#productSearch');
           
            let divProduct = document.createElement('div');
            divProduct.setAttribute('id', "delete");
    divProduct.setAttribute('class', "card");

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product[CheckIndex].id+".jpg");
    productImg.setAttribute('width', "200");

    const productName = document.createElement('h1');
    productName.textContent = product[CheckIndex].name ;

    const productPrice = document.createElement('p');
    productPrice.setAttribute('class', "price");

    productPrice.textContent = "$ " + product[CheckIndex].price ;

    const productColor = document.createElement('p');
    productColor.textContent = "The color of this phone is " + product[CheckIndex].color;

    const productStock = document.createElement('p');
    productStock.textContent = "Still have "+ product[CheckIndex].stock + " units for sale.";

    const buttonProduct = document.createElement('button');
    buttonProduct.textContent = "Add to Cart" ;



    divProduct.appendChild(productImg);
    divProduct.appendChild(productName);
    divProduct.appendChild(productPrice);
    divProduct.appendChild(productColor);
    divProduct.appendChild(productStock);
    divProduct.appendChild(buttonProduct);


    divProductSearch.appendChild(divProduct);

    divProductsEleShow.remove();

        }


        if (CheckAnswer == false) {
            const test = document.querySelector('#delete');
            test.remove();
            startup();
            
        }



}







