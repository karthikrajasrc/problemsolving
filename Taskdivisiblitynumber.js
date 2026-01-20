const prompt = require("prompt-sync")();

function divisiblitycheck(str){
    for (i = 2; i < str; i++){
        if (str % i === 0){
            return true;
        }else{
            return false;
        }
    }
}


let userinput = prompt("Enter the number to check Divisbility -");
let result = divisiblitycheck(userinput);
console.log(result ? "Yes, This number can divisible" : "No, This number cannot be divisibe");