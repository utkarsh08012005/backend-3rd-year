const fs = require("fs");

fs.writeFile("../yoyo.txt","g26 heloooo",function(err){
if(err) return console.log(err);
console.log("Success!!1");
})