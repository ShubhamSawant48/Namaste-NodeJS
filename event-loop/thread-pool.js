 /* 
 by default threadpool uses 4 threads and if 5 threads request come 5th
 thread wait to exexute one of occupied thread to complete and then 5th 
 thread will go to that thread to run.

 accoring to usage , we can alter the size of the threadpool by command:
        process.env.UV_THREADPOOL_SIZE = 4
 */



const fs = require("fs");
const crypto = require("crypto");

process.env.UV_THREADPOOL_SIZE = 4;

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 - cryptoPBKDF2 done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 - cryptoPBKDF2  done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 - cryptoPBKDF2  done");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 - cryptoPBKDF2  done");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 - cryptoPBKDF2  done");
});

// fs.readFile("./file.txt", "utf8", () => {
//   console.log("File Reading CB");
// });