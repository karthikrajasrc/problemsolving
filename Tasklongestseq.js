const prompt = require ("prompt-sync")();
let inputstring = prompt("Enter the Value : ")

function longestsequence(str){
    let maxlength = 1, currentlength = 1;

    for (let i = 1; i <= str.length; i++){
        if (str[i] === str [i-1]){
            currentlength++;
        }else {
            maxlength = Math.max(maxlength,currentlength);
            currentlength = 1;
        }
    }
    return Math.max(maxlength,currentlength);
}

let result = longestsequence(inputstring);
console.log("The longest repeating sequence is ", result === 1 ? "No repeating sequence" : result);