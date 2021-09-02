
function Reverse(word) {

        const text = word;

        let New = '';


        for (let i = text.length -1 ; i > -1 ; i--) {
        
        
                New += text[i];
        
        }
        
        console.log(New)
        

}


function Replace(word) {

        const text = word;
        let goCheck ='';
        let NewText = '';

        for (let i = 0 ; i < text.length  ; i++) {
        

                goCheck = text[i];

                

                if(goCheck=='a'|| goCheck=='e' ||  goCheck=='i'|| goCheck=='o'|| goCheck=='u') {
                        NewText+='*'
                }else 
                NewText+=goCheck
        
        }
        
        console.log(NewText)

}


function CountVowels(word) {

        const text = word;
        let goCheck ='';
        let count = 0;

        for (let i = 0 ; i < text.length  ; i++) {
        

                goCheck = text[i];

                

                if(goCheck=='a'|| goCheck=='e' ||  goCheck=='i'|| goCheck=='o'|| goCheck=='u') {
                        count+=1
                } 
                
        
        }
        
        console.log(count)
}





Reverse("Nuttawat rodsomban")
Replace("Nuttawat rodsomban")
CountVowels("Nuttawat rodsomban")