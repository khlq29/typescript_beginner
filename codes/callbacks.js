"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(`Result: ${num}`);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add(5, 25));
let combinedVal;
combinedVal = add;
//combinedVal = printResult  //error
//combinedVal =6   //throws an error
console.log(combinedVal(69, 69));
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
