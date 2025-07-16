const fs = require("fs");

let users = [
  {
    name: "utkarsh",
    age: "20",
    address: "chandigarh"
  },
  {
    name: "yoyo",
    age: "51",
    address: "delhi"
  }
];

fs.writeFile("users.txt", JSON.stringify(users),function(err) {
  if (err) return console.log(err);
console.log("Users data written");
  });