const fs = require("fs")
function read(filePath){
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,"utf-8",(err,data)=>{
            if(err){
                return reject(err)
            }
            let users = JSON.parse(data)
            resolve(users)
        })
    })
}
function write(filePath,data){
   
}
module.exports.read = read;