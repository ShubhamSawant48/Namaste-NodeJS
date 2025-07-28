const fs = require("fs");
var a = 1000;

setImmediate(()=>{console.log("setImmediate called...")});

fs.readFile("./file.txt","utf-8",()=>{
    console.log("file read successfully...");
});

setTimeout(()=>{
    console.log("Timer expired...");
},0);

function valueOfA () {
    console.log("value of a:",a);
};

valueOfA();

console.log("Last line of the program...");

// value of a: 1000
// Last line of the program...
// Timer expired...
// setImmediate called...
// file read successfully...