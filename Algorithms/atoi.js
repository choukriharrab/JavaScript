function atoi(str) {

    let arr = [];
    let sign;
    let number;
    const INT_MIN = -Math.pow(2, 31);
    const INT_MAX = Math.pow(2, 31) - 1;

    for (i = 0; i < str.length; i++){ 

        if(str[i]!=' '){

            if(str[i]==='-'){
                sign =str[i];
            };

            if(/\d/.test(str[i])){
                arr.push(str[i]);
            }; 

        }; 
    };

    arr.unshift(sign);

    for(i = 0; i < arr.length; i++){
        number = parseInt(arr.join( ""));
    };

 
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

console.log(atoi("s = 42"));
console.log(atoi("s = -42")); 
console.log(atoi("581-42")); 
console.log(atoi("jkuwords and 987")); 