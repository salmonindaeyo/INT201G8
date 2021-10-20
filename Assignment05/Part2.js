//Export functions
//-----Function part 1 Higher-Order Functions -----
export function excute(array,fn,other){
    return fn(array,other);
}
export let countElement = (x)=> x.length;
export let addElement = function(array,newProduct){
    array.push(newProduct);
    return array;
}
export let searchName = function(array,keyword){
    return array.find((name)=>name === keyword);
}

//-----Function part 2 - Closure + Rest parameters -----
export function createProduct(){
    let products = [];
 
    function addNewProduct(ids,name,price,...description){
        let newProduct = {};
        newProduct.id = ids;
        newProduct.name = name;
        newProduct.price = Number(price);
        newProduct.detail = description;
        
        let findProduct = products.find(({id})=>id === ids); 
        if(findProduct===undefined){
            products.push(newProduct);
        }

        return products; 
    }
    return addNewProduct;
}


//-----Function part 3  Default parameter -----
export function findTotal(price=0,quantity=1){
    return price*quantity;
}


//-----Function part 4 Arguments in function  -----
export function busket() {
    let userBusket = [];
    function addToBusket() {
        for (let i = 0; i < arguments.length; i++) {
            userBusket.push(arguments[i]);
        }
        return userBusket;
    }
    return addToBusket;
 }
