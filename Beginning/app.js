const { x, calculateSum } = require("./calculate");
const { calculateMultiply } = require("./calculate"); // another way

const util = require("node:util");
// util.callbackify()  => there are already pre defined funtions also. 

// const { x, calculateSum } = require("./calculate/calculateSum");
// const { calculateMultiply } = require("./calculate/calculateMultiply");

const trail = require("./xyz"); // one module into another

const jsonData = require("./data.json");

var a = 5;

var b = 6;
// var x = 20; cant declare x becoz x is already declared through import

calculateSum(a, b);
calculateMultiply(a, b);
console.log(x);

console.log(jsonData);

console.log(JSON.stringify(jsonData));
