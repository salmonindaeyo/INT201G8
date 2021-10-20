//Import functions
import {excute,countElement,addElement,searchName,
        createProduct,
        findTotal,
        busket} from './Part2.js'

//Test function part 1
let listCoffee = ['Americano','Cappuccino','Espresso','Latte','Mocha'];
console.log(excute(listCoffee,countElement)); 
console.log(excute(listCoffee,addElement,'Tea'));
console.log(excute(listCoffee,searchName,'Espresso'));  
console.log(excute(listCoffee,countElement));

//Test funciton part 2
let iPhone = createProduct();
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Pink');
iPhone(110,'iphone 11',24900,'RAM 4GB', 'ROM 64GB', '4G', 'Red'); 
iPhone(120,'iphone 12',29900,'RAM 4GB','ROM 64GB','4G','Grey');
iPhone(122,'iphone 12 Pro',36100,'RAM 6GB','ROM 128GB','4G','Black');
console.log(iPhone(132,'iphone 13 Pro',38900,'RAM 6GB','ROM 128GB','5G','Blue')); 

//Test function part 3
console.log(findTotal(150,4));
console.log(findTotal(200));
console.log(findTotal());

//Test funciton part 4
const user = busket();
user('Phone13');
user('Macbook Pro');
console.log(user('Apple Watch', 'Ipad mini'));
