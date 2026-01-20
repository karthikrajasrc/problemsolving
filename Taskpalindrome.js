const palin = "lappai";

const result = palin.split("").reverse().join("");

if (palin === result){
    console.log("Yes, this is a palindrome text");
}else {
    console.log("No, This is not a palindrome");
}