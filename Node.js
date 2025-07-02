const fs = require('fs');
console.log("Hello World!");
function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
fs.readFile("demo.txt", "utf-8", (data) => {
    console.log(data);
});
add(2,3);
subtract(5,6);
multiply(3,2);
console.log("exit");