const https = require("node:https");
const fs = require("node:fs");
const { setTimeout } = require("node:timers");

console.log("Hello World!!!");

https.get(
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&collection=83636&tags=layout_CCS_Chinese&sortBy=&filters=&type=rcv2&offset=0&page_type=null",
  (res) => {
    console.log("api feteched successfully...");
  }
);

fs.readFileSync("./file.txt","utf-8")
console.log("Sync file readed");

setTimeout(() => {
  console.log("timeout called");
}, 3000);

fs.readFile("./file.txt", "utf-8",()=>{console.log("file readed successfully...");});

function multiply(a, b) {
  const result = a * b;
  return result;
}

const temp = multiply(50, 50);

console.log(temp);
