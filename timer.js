// setTimeout(()=>{
//     console.log("printing after 4 sec");
// },4000);

// console.log("hello");

const myfunc  = (abc,cde,efg)=>{
    console.log(abc, "its rock",cde,efg);
}

// setTimeout(myfunc,2000,'hey','lpu','bie');

// const myfunc = (abc,sec)=>{
//     console.log("Abhishek");
// }
// console.log()

var timerid = setInterval(myfunc,1000,' 1 sec');
   
   const fun = ()=>{
    console.log("done")
    clearTimeout(timerid);
   }
    
   setTimeout(fun,5000);
// setTimeout(myfun,5000);
    
// // setTimeout(myfunc,10000, '10 sec');



