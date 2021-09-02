




function rase(years){
    var rase = {
        monkey: "monkey" ,
        rooster :"rooster"
        , dog : "dog"
        , pig : "pig"
        , rat : "rat"
        , ox : "ox"
        , tiger : "tiger"
        , rab : "rab"
        , dra : "dra"
        , snake : "snake"
        , horse : "horse"
        , sheep : "sheep"
    
    }
    let num = years % 12
    switch(num){
        case 0 : console.log(rase.monkey)
        break;
        case 1 : console.log(rase.rooster)
        break;
        case 2 : console.log(rase.dog)
        break;
        case 3 : console.log(rase.pig)
        break;
        case 4 : console.log(rase.rat)
        break;
        case 5 : console.log(rase.ox)
        break;
        case 6 : console.log(rase.tiger)
        break;
        case 7 : console.log(rase.rab)
        break;
        case 8 : console.log(rase.dra)
        break;
        case 9 : console.log(rase.snake)
        break;
        case 10 : console.log(rase.horse)
        break;
        case 11 : console.log(rase.sheep)
        break;
    }
}

rase(1900)
rase(2001)
rase(2024)