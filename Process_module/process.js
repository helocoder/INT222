// const pc = require('child_process');
// pc.exec('www.google.com');

const {spawn} = require('child_process')
const child = spawn('pwd');
console.log("running.....");
child.on('close',function (code,signal){
console.log('exited with code ' + `${code}  ${signal}`)
});