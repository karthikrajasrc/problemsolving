let A = 2021;

if ((A%4 === 0 && A%100 !== 0) || A%400 === 0){
    console.log("Yes this is a leap year");
} else {
    console.log("No, it is not a leap year");
}