const fs=require('fs');
console.log("Start");                                                    
setTimeout(() => {
    console.log("Timer callback");
}
, 0);
setImmediate(() => {
    console.log("set Immediate callback");
});
fs.readFile("demo.text",(data)=>{
    console.log("poll phase callback");
    setTimeout(() => {
        console.log("Timer 2");
    }, 0);
    setImmediate(() => {  
        console.log("immd 2");
    });
});
console.log("End");