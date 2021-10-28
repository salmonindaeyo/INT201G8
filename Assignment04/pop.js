//Syntax
//pop()

//ex1
let arr = ['A', 'B', 'C', 'D', 'E', 'F']
let lastArr = arr.pop();
console.log(lastArr); // F
console.log(arr); // ['A', 'B', 'C', 'D', 'E']

//ex2
let arr2 = ['A', 'B', 'C', 'D', 'E', 'F']
console.log(`Before: ${arr2.length}`) // 6
arr2.pop();
console.log(`after ${arr2.length}`); // 5

//ex3
let arr3 = ['A', 'B', 'C', 'D', 'E', 'F'];
let newArr = [];
for (let i = 0; i < arr3.length; i++) {
    newArr.push(arr3.pop());
    i--;
}
console.log(newArr)




/////////////////////////////////


let Student = ['nut','nice','tan'];

Student.pop();

console.log(Student);


///////////////////////////////







let Student = ['nut','nice','tan'];

console.log(Student.pop());

console.log(Student);