const fs = require("fs");
const a = 1000;

setImmediate(() => console.log("setImmediate called..."));

Promise.resolve("Promise resolved...").then(console.log);

fs.readFile("./file.txt", "utf8", () => {
  console.log("file read successfully...");
});

setTimeout(() => {
  console.log("timer expired...");
}, 0);

process.nextTick(() => {
  console.log("process nextTick called...");
});

function valueOfA() {
  console.log("value of a:", a);
}

valueOfA();

console.log("last line of the code...");

// value of a:1000
// last line of the code...
// process nextTick called...
// promise resolved...
// timer expired...
// setImmediate called...
// file read successfully...