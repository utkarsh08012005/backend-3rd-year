let p=new Promise((resolve, reject)=>{
   resolve("utkarsh")
})  
console.log(p);
p.then((data)=>
   console.log(data)
).catch((err)=>{
   console.log(err);
} )