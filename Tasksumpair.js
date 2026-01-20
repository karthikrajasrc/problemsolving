const prompt = require("prompt-sync")();
let element = Number(prompt("Enter the total Element :"));
let X = Number(prompt("Enter the Target Value :"));
let N = prompt("Enter the array value for the pair :").split(" ").map(Number);

function sumpair(N, X) {
    for (i = 0; i < N.length; i++) {
        for (j = i + 1; j < N.length; j++) {
            if (N[i] + N[j] === X) {
                return {found: true , i, j , a:N[i] , b:N[j]};
            }
        }
    } 
    return {found: false};
}

let result = sumpair(N, X);
result.found ? console.log("The Index number is :", result.i, result.j , 
    "& The pair value is :", result.a , result.b , 
    "The target is :", X) 
    : console.log("No pair found!");
    