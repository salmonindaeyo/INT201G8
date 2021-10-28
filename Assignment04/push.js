let vegetables = ['parsnip', 'potato']
let moreVegs = ['celery', 'beetroot']

// Merge the second array into the first one
vegetables.push(...moreVegs);







let obj = {
    length: 0,

    addElem: function addElem(elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem)
    }
}

// Let's add some empty objects just to illustrate.
obj.addElem({})
obj.addElem({})
console.log(obj.length)





let fruits = ['Apple','bannana' , 'carrot']

fruits.push('watermelon');





///////////////////////////////////////


let Student = ['nut','nice','tan'];

console.log(Student);
//Student.push('john');
Student.push('john','jame');
console.log(Student);



//////////////////////////////////////





let Student = ['nut','nice','tan'];

console.log(Student.push('john'));


