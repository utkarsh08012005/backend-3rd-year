const express = require ('express')
const app = express()

app.get('/', (req, res) => {
//   res.send('Hello World!')
// res.send("<h1>OK</h1>")
// res.sendFile(__dirname + '/index.html')
// res.json({
//     name: 'John Doe',
//     age: 30,
//     city: 'New York' 
// })
}   )

//path-variable 
//1. query-parameter
app.get("/watch",(req,res)=>{
    let videoId = req.query.v;
    letnID=req.quesry.n;
    res.send("I got it"+ videoId + " " + nID);  
})
//2. params
app.get("/watch/:vi",(req,res)=>{
    console.log(req.params.v);
    console.log(req.params.n);
    res.send("got it");  
})  

app.listen(3000,function(){
    console.log('Server started')
});

//res.send can send any format. 
//res.end can only send string
