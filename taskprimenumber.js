//write a code to find prime number or not.
// input is 7

let prime = 8;

function isprime(){
    if (prime <=1){
        return false;
    } else {
        for (let i = 2; i<= prime -1; i++){
            if (prime%i === 0)
                return false;
        }
        return true;
    }
}

const result = isprime();
if (result){
    console.log("The given is prime number");
}else {
    console.log("This is not a prime number");
}