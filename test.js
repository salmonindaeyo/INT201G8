let num ;

num = 10;

console.log(num);


var greeting = 'Hey';
greeting = 2; 

console.log(greeting);



let greeting1 = 5; 




function bnk48() {
    var orn = "Orn BNK48";
    var member = ['Noey','Wee','Font']
    console.log(bnk48);  // Function : bnk48
    console.log(orn); // Orn BNK48 จะเข้าถึงใน Function ได้  // Orn BNK48
    console.log(member); // ['Noey','Wee','Font']

     var test = "ee";

    console.log(greeting1);
    
}

//ReferenceError เพราะ member ไม่สามารถเข้าถึงได้จากภายนอก function 
bnk48();

console.log(test);