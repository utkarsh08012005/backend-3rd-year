const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))

app.use(express.static(__dirname+"/public"));

app.post("/addusers",(req, res) => {
    let username =req.body.username;
    let password =req.body.password;
    res.json ({
        username, 
        password
    })
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
})