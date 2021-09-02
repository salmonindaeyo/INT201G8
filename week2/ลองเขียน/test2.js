let member =  "Orn";
member = "Noey"
console.log(member); // Noey let จะยอมให้ Assign ค่าใหม่ได้




function bnk48() {
    let orn = "Orn";  // Orn
    if(true){
      let orn = "nut love Orn"
      console.log(orn); // "nut love Orn"
      // จริงๆ แล้ว orn เป็น block scoped เราสามารถสร้างตัวแปร orn ใหม่ได้ 
      // ตัวแปรนี้จะไม่สามารถเข้าถึงได้จากภายนอก block นี้และเป็นอิสระจากกัน
      //กับตัวแปร orn ตัวแรกที่เราสร้าง !
      //หมายความว่าจะได้ทั้ง Orn เเละ nut love Orn ทั้งคู่เลย
    }
    console.log(orn); // Orn  ,จะเห็นตามที่อธิบายข้างต้นว่าภายใน block ไม่ส่งผลกระทบกับค่านี้
  }
  bnk48()
  //console.log(orn); // จะเกิด ReferenceErrorr จะไม่สามารถเข้าถึงได้จากภายนอก function



  