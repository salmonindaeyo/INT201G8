//filter()
/*//Syntax 
    arr.filter(function(element, index, array)) 

//Arrow Function
    arr.filter((element) => { ... } )
    arr.filter((element, index) => { ... } )
    arr.filter((element, index, array) => { ... } )

*/


//ตัวอย่าง Callblack function 
let ages = [10,12,18,22,35,40,45,50,60];
function checkAge(age){ //age คือ element แต่ละตัวที่อยู่ใน ages
    return age >=18;    //return age ที่มีค่าอย่างน้อย 18
}
console.log(ages.filter(checkAge));  //[18, 22, 35, 40, 45, 50, 60]




//ตัวอย่าง array.filter(function(value, index, arr)) 
let num = [0,1,2,3,4,5,6,7,8,9,10,11,12,13];
const evenNum = num.filter(function (element,index,array){
    return element%2==0 || index==array.length-1        ///return elementที่เป็นเลขคู่ หรือ อยู่ที่ index สุดท้ายของ array
});
console.log(evenNum);











//ตัวอย่าง array.filter((element) => { ... } )
let scores = [68,75,70,80,85,90,82];
const checkScore = scores.filter(score => score >= 80); //return คะแนนที่ >= 80 เท่านั้น
console.log(checkScore);






//ตัวอย่าง array.filter((element, index) => { ... } )
let ids = [101,102,103,104,105];
const checkId = ids.filter((id,index) => id < 102 || index == 3); //return idที่ <102 หรือ 
                                                                // มี index อยู่ตำแหน่งที่ 3 เท่านั้น
console.log(checkId);









//ตัวอย่าง array.filter((element, index, array) => { ... } )
let animals = ['ant','bird','cat','dog','frog'];
const choose = animals.filter((animal,index,arr)=>{ //ไม่จำเป็นต้องใช้ parameter ครบทุกตัวก็ได้
    arr.pop();                      //ดึง frog ออกจาก array นี้ (arr หมายถึง animals)
    arr.push('rat');                //เพิ่ม rat ต่อท้าย array นี้
    return animal.length==3;        //ดึง element ที่มีความยาวเท่ากับ 3 เท่านั้น     
});
console.log(choose);        








//ตัวอย่าง array.filter((element, index, array) => { ... } )
let nums = [0,1,2,3,4]
const evenNum = nums.filter((num,index,array)=>{
    array[index] += 1 ;     //แก้ไข element แต่ละตัว ให้ +1 เพิ่ม
    console.log(array);     
    return num%2===0;      
})
console.log(evenNum);


