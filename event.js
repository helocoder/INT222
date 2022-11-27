// //event module//

// const eventemitter = require('events');
// const { emit } = require('process');
// const event = new eventemitter;

// event.on("greet",()=>{
//     console.log("hello coder")
// });

// event.on('code',()=>{
//     console.log('hello world');
// })

// event.on('eat',()=>{
//     console.log("eating....")
// })

// const asfun = async ()=>{
//     event.emit('greet');
//     event.emit('code');
// }

// // asfun();

// event.emit('code');

const eventemitter = require('events');
const event = new eventemitter;

event.on('sleep',()=>{
    console.log(50+100);
})
event.on('code',()=>{
    console.log("codindg.....");
})


event.emit('sleep');
// event.emit('code');



