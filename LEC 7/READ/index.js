const fs = require("fs");
fs.readFile("../write/users.txt","utf-8",function(err,data) {
  if (err) return console.log(err);
let users =JSON.parse(data);
console.log(users[0].name)})