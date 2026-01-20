let reversedfirst = "i";
let reversedscnd = " enjoy";
let reversedthird = "codekata";


function finalresult(){
const final1 = reversedfirst.slice(1, -1).split("").reverse().join("");
const final2 = reversedscnd.slice(1, -1).split("").reverse().join("");
const final3 = reversedthird.slice(1, -1).split("").reverse().join("");
console.log(final1 + final2 + final3);
}
