const fs = require('fs');

const data = fs.readFileSync('./Docs/Abhi.txt');

// const data = fs.readFile('./Docs/Abhi.txt',(err,data)=>{
//   if(err)
//  console.log(err);
//  else
//  console.log(data.toString());
// });

console.log(data);

console.log("After data")



