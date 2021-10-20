import {excute,countElement,addElement,searchName,
        createProduct,
        findTotal,
        busket} from './Part2.js'

//Function part 1
let listCoffee = ['Americano','Cappuccino','Espresso','Latte','Mocha'];
console.log(listCoffee);
console.log(excute(listCoffee,countElement)); 
console.log(excute(listCoffee,addElement,'Tea'));
console.log(excute(listCoffee,searchName,'Espresso'));  
console.log(excute(listCoffee,countElement));

//Funciton part 2
let iPhone = createProduct();
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Pink');
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Red'); 
iPhone(120,'iphone 12',29900,'RAM 4GB','ROM 64GB','4G','Grey');
iPhone(122,'iphone 12 Pro',36100,'RAM 6GB','ROM 128GB','4G','Black');
console.log(iPhone(132,'iphone 13 Pro',38900,'RAM 6GB','ROM 128GB','5G','Blue')); 

//Function part 3
console.log(findTotal(150,4));
console.log(findTotal(200));
console.log(findTotal());

//Funciton part 4
const user = busket();
user('Phone13');
user('Macbook Pro');
console.log(user('Apple Watch', 'Ipad mini'));