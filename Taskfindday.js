const prompt = require("prompt-sync")();


function findday(dayneed){
    let date = new Date(dayneed);
    let days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return days[date.getDay()];
}


let userinput = prompt("Enter the date to know the day (MM/DD/YYYY)- ");
let result = findday(userinput);
console.log(result);