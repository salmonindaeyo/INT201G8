import { input,divProductEle } from "./main.js";

// # รับข้อความที่พิมตอน search แล้วกด enter ได้เลย
export function inputSearch(event){
    let text = input.value.toLowerCase();
    if (event.keyCode === 13) { // 13-> ปุ่ม enter
        searching(text);
    }
    if (event.target.value === "") {
        searching(text);
    }
}

//กดปุ่มเพื่อ search
export function buttonSearch(){
    let text = input.value.toLowerCase(); 
        searching(text);
}

//ลองเปลี่ยนเป็น searching แบบซ่อน (ใช้เป็น style="display:none") 
export function searching(textSearch){
        divProductEle.setAttribute('style','display:""');
        const divProductChild = divProductEle.children;
        for(let i = 0; i < divProductChild.length;i++){
            let productName = divProductChild[i].getAttribute('id').toLowerCase(); 
            if(productName[productName.search(textSearch)]){
                divProductChild[i].style.display = '';
            }else{
                divProductChild[i].style.display = 'none';
            }
        }
}