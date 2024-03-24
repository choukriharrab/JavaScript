function myAtoi(str) {

    let arr = [];
    let sign = +1;
    let number;

    for (i = 0; i < str.length; i++){ 

        if(str.charAt(i)!=' '){

            if(str.charAt(i)==='-'){
                sign =-1;
            }else if(str.charAt(i)==='+'){
                sign =+1;
            }
            else if(/\d/.test(str.charAt(i))){
                arr.push(str.charAt(i));
            } else{
                break;
            };;

             

        }; 
    };
    for(i = 0; i < arr.length; i++){
        number = parseInt(arr.join( ""))*sign;
    };

    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;
    if (number < INT_MIN) {
        return INT_MIN;
    } else if (number > INT_MAX) {
        return INT_MAX;
    }else if (number <INT_MAX && number >INT_MIN){
        return number;
    } else{
        return 0;
    }
    
};

console.log(myAtoi("words and 987"))