// Even or Odd.

function evenOrOdd(num){

    if(num % 2===0){
        return (num +" is Even.");
    }else{
        return num +" is Odd.";

    };
};

console.log(evenOrOdd(4));
console.log(evenOrOdd(5));

// Days of the week

var day = 4;

switch(day){
    case 1 : console.log("Monday"); break;
    case 2 :console.log("Tuesday"); break;
    case 3 :console.log("Wednsday"); break;
    case 4 :console.log("Thursday"); break;
    case 5 :console.log("Friday"); break;
    case 6 :console.log("Saturday"); break;
    case 7 :console.log("Sunday"); break;
    default :console.log("Unvalid Day"); break;

}

// Maximum

let a = -15;
let b = 6;
let c = 2.6;

function max(){
    if(a>=b && a>=c){
        return a;
    }else if(b>=a && b>=c){
        return b;
    }
    else if(c>=a && c>=b){
        return c;

    }else{
        return "Nonsense!!";
    }
    ; 
}

console.log(max());

// The Teacher

let score = 83;

function teacher(){
    if(score>85){
        return 'A';
    }else if(score>70 && score <=85){
        return 'B';
    }
    else if(score>55 && score <=70){
        return 'C';

    }else if(score>40 && score <=55){
        return 'D';

    }else if(score>15 && score <=40){
        return 'E';

    }else if(score <=15){
        return 'F';

    }
    else{
        return "Nonsense!!";
    }
    ; 
}

console.log(teacher());

