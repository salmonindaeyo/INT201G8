 //คำถามและตัวเลือก
 let AllQuestion = {   
    Question1 : 'What is one?',
    Answer1 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question2 : 'What is two?',
    Answer2 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question3 : 'What is three?',
    Answer3 : {
        choice1 : 1, choice2 : 2, choice3 : 3, choice4 : 4, choice5 : 5
    },
    Question4 : '1+1=3 (True,False)',
    Answer4 : {
        choice1 : true, choice2 : false
    },
    Question5 : 'What is Client-side Web Server?',
    Answer5 : {
        choice1 : 'INT101', choice2 : 'INT207', choice3 : 'INT205', choice4 : 'INT202', choice5 : 'INT201'
    }
};
console.log(AllQuestion);

//เฉลย
let solution = [
    AllQuestion.Answer1.choice1,
    AllQuestion.Answer2.choice2,
    AllQuestion.Answer3.choice3,
    AllQuestion.Answer4.choice2,
    AllQuestion.Answer5.choice5
];

class Player {
    constructor(name) {
        this.name = name;   //ชื่อผู้เล่น
        this.score = 0;     //คะแนนสะสม
        this.quest = 5;     //จำนวนข้อคำถาม
        this.myAns = [0, 0, 0, 0, 0];   //กระดาษคำตอบ (0 = แปลว่ายังไม่ได้ตอบ)
        this.playing = function (Q, A) {//เลือกตอบคำถาม
            let index = Q - 1;
            switch (Q) { //เลือกคำถาม
                case 1: addAns(this, index, A); //เพิ่มคำตอบ
                    recheckScore(this);         //เช็คคะแนน
                    break;
                case 2: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 3: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 4: addAns(this, index, A);
                    recheckScore(this);
                    break;
                case 5: addAns(this, index, A);
                    recheckScore(this);
                    break;
            }
        };
        function addAns(Player, index, A) { 
            Player.myAns[index] = A; //เพิ่มคำตอบลงใน myAns 
            return Player;
        }
        function recheckScore(Player) { //นับคะแนน
            Player.score = 0; //รีเซ็ต score เป็น 0 เพื่อนับคะแนนใหม่ทุกครั้ง
            for (let i = 0; i < Player.quest; i++) {  //วน loop ตามจำนวนข้อคำถาม
                if (solution[i] === Player.myAns[i]) { //เปรียบเทียบคำตอบใน solution[] กับ myAns[] (ใช้ === เพื่อป้องกันการเกิด implicit conversions)
                    Player.score += 1;  //ถ้าคำตอบที่ตรงกับเฉลย ให้เพิ่ม score+1
                }
            }
            return Player.score;
        }
    }
}
/*
Question 1 ตอบ 1
Question 2 ตอบ 2
Question 3 ตอบ 3
Question 4 ตอบ false
Question 5 ตอบ INT201   
*/


//สร้างผู้เล่น 3 คน
let player1 = new Player('Nice');
let player2 = new Player('Nut');
let player3 = new Player('Tan');

//เริ่มต้น ผู้เล่นจะมี score เป็น 0
console.log(player1);
console.log(player2);
console.log(player3);

console.log("------------Round 1------------");
//ลองตอบคำถามรอบที่1 
//player1 
player1.playing(1,1);
player1.playing(2,2);
player1.playing(3,3);
//player2
player2.playing(1,1);
player2.playing(2,2);
player2.playing(3,3);
player2.playing(4,true);
player2.playing(5,'INT202');
//player3
player3.playing(1,1);
player3.playing(2,2);
player3.playing(3,3);
player3.playing(4,false);
player3.playing(5,'INT201');

//ดูคะแนนรอบที่ 1 
console.log(player1);//score=3
console.log(player2);//score=3
console.log(player3);//score=5


console.log("------------Round 2------------");
//ลองตอบคำถามรอบที่ 2
//player1 ลองตอบคำถามเพิ่ม
player1.playing(4,false);
player1.playing(5,'int201');
//player2 ลองเปลี่ยนคำตอบ
player2.playing(2,22);

//ดูคะแนนรอบที่ 2
console.log(player1);//score=4
console.log(player2);//score=2
console.log(player3);//score=5

//เฉลยคำตอบ
console.log('Solution : '+ solution)