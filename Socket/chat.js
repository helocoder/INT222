const http  = require('http')
const socket =  require('socket.io')
const express = require('express')

let app = express();
let server = http.createServer((req,res)=>{
    console.log("server start");
    res.sendDate();
});
app.listen(3000);