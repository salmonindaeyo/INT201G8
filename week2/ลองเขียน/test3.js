let x = 3 
if(x === 3){
    let y = 4 
    console.log('This is y : ',y);    
}
// console.log('This is y outside: ',y); // y ไม่สามารถประกาศนอก scope block function ได้


var x = 3 
if(x === 3){
    var y = 4
    console.log('This is y :',y); // This is y : 4
}
// console.log('This is y outside : ',y);  // var จะสามารถ ออกมานอก fn ได้