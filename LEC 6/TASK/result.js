const fs = require('fs');


const data1 = fs.readFileSync('../demo.txt', 'utf8');
const data2 = fs.readFileSync('../yoyo.txt','utf8');


const combined = data1 + '\n' + data2;


fs.writeFileSync('result.txt', combined);

console.log('✅ Data written successfully to result.txt');