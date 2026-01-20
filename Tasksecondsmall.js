let arr = [1,1,1,1,1,1];
let n = 2;

function smallestnumber(arr1,n1){
    arr1.sort((a,b) => a - b);
    if (n1 > 0 && n1 <= arr1.length){
        return arr1[n1-1]
    } else {
        console.log("Invalid Input")
    }

}

let final = smallestnumber(arr,n)
console.log(final);