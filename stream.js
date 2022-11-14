const fs  = require('fs');
const http = require('http');
const server = http.createServer();
var data = '';

//readble stream 
// var read = fs.createReadStream('Docs/test.txt');
// server.on("request",(req,res)=>{

//     read.on('data',(chunk)=>{
//         res.write(chunk);
//     })

//     console.log("connected...")
//     }).listen(5000);


// using pipe line

// var read = fs.createReadStream('Docs/input.txt');
// var write = fs.WriteStream('Docs/output.txt');

// read.pipe(write);

// console.log(write);

// console.log("writing done");

//Zlib//

const zlib  = require('zlib');

const read = fs.createReadStream('Docs/input.txt');
read.pipe()
console.log("file compressed....");










