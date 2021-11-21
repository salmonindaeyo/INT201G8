//### Cookie ###
export class Cookie {
    
    static get(name) {  //ดึง value จาก name=value ใน cookie
      let cookieName = `${encodeURIComponent(name)}=`,     //นำ name มาแปลงเป็น encode เพื่อจะเอาไปเทียบกับ cookie
        cookieStart = document.cookie.indexOf(cookieName), //หาตำแหน่งของ ที่เจอ'name='
        cookieValue = null;

        if (cookieStart > -1) { //ถ้าหาเจอ
        let cookieEnd = document.cookie.indexOf(';', cookieStart); //หาตำแหน่ง ที่เจอ ';'
        if (cookieEnd == -1) {  //ถ้าไม่มี ';' ปิด
          cookieEnd = document.cookie.length; //ให้ใช้ขนาดความยาวของ cookie แทน
        }

        cookieValue = decodeURIComponent(
          document.cookie.substring(cookieStart + cookieName.length, cookieEnd)
          //เลือก String ที่อยู่ระหว่าง 'name=' กับ ';'
          //มาแปลงเป็น decode แล้วเก็บเป็นค่า value
        );
      }
      return cookieValue;  
    }
    
    static set(name, value) { //เปลี่ยน name และ value ใน cookie
      let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      document.cookie = cookieText; 
    }

    //**ตัด unset กับ expires ออก*/
}

