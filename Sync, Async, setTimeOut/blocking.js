const crypto = require("node:crypto");

console.log("Hello World!!!");

//  pbkdf2 - password based key derivative function
// synchronous function - Will block the main thread - DONT USE THIS!!!
crypto.pbkdf2Sync("password", "salt", 50000, 30, "sha512");
console.log("Sync key generated...");

setTimeout(() => {
  console.log("Call me right now!!");
}, 0);

// Async function
crypto.pbkdf2("password", "salt", 50000, 30, "sha512", (err, key) => {
  console.log("key is generated...");
});

function multiply(a, b) {
  const result = a * b;
  return result;
}

const temp = multiply(50, 50);

console.log(temp);
