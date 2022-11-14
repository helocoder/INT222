// const fs = require('fs');
// const os = require('os');
// const { dirname } = require('path');

// //sync
// // fs.writeFileSync('./docs/text.txt',"hello world");


// //async

// // fs.writeFile('./docs/text.txt',"hello coder",(err)=>{
// //     if(err)
// //     console.log(err)

// //     console.log("file write sucessful");
// // })

// //read sync

// // const buf_data = fs.readFileSync('./docs/text.txt');
// // console.log(buf_data.toString())

// //append file

// // fs.appendFileSync('./docs/text.txt'," INT 222");

// //rename file
// // fs.renameSync('./docs/text.txt',"text1.txt")



// //--------------------------------------------------------------------------------------------------------------------------------------------------//
// //mkdir
// const path = require('path');
// fs.mkdir(path.join("./","hello"),(err)=>{
//     if(err)
//     console.log(err)
// });
// //more data
// // fs.appendFileSync('./Abhishek/bio.txt',"specialization = WEB DEV")
// //read data
// // const read= fs.readFileSync('./Abhishek/bio.txt');
// // console.log(read.toString());
// //rename file
// // fs.renameSync('./Abhishek/bio.txt',"Abhi");


const fs = require('fs');
const path = require('path');

