let users = [
    {
        name:"utkarsh",
        age: 20,
        city: "Delhi"
    },
    {
        name:"sahil",
        age: 22,
        city: "Mumbai"
    },
    {
        name:"priya",
        age: 19,
        city: "Bangalore"
    }   
]
let users1 = [
    {
        name:"utkarsh",
        age: 20,
        city: "Delhi"
    },
    {
        name:"sahil",
        age: 22,
        city: "Mumbai"
    },
    {
        name:"priya",
        age: 19,
        city: "Bangalore"
    }   
]
const fs = require('fs');
fs.writeFile('../user.txt',JSON.stringify(users) , function(err) {
    if(err) {
      return  console.error("Error writing to user.txt:", err);
    }
    console.log("user.txt written successfully");
});
fs.writeFile('../user1.txt',JSON.stringify(users1) , function(err) {
    if(err) {
      return  console.error("Error writing to user.txt:", err);
    }
    console.log("user1.txt written successfully");
});


fs.readFile('../user.txt', 'utf-8', (err, data) => {
  if(err) {
    return console.error("Error reading user.txt:", err);
  }
  fs.readFile('../user1.txt', 'utf-8', (err, data1) => {
    if(err) {
      return console.error("Error reading user1.txt:", err);
    }
    let users = JSON.parse(data);
    let users1 = JSON.parse(data1);
    
    let mergedUsers = [...users, ...users1];
    
    fs.writeFile('../user2.txt', JSON.stringify(mergedUsers), (err) => {
        if(err) {
            return console.error("Error writing to user2.txt:", err);
        }
        console.log("user2.txt written successfully");
    });
  });
});




fs.readFile('../user2.txt', 'utf-8', (err, data) => {
    if(err) {
        return console.error("Error reading user2.txt:", err);
    }
    let users2 = JSON.parse(data);
    console.log("Merged Users:", users2);
   
});