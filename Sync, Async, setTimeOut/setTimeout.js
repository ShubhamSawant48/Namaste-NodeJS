console.log("Hello World!!!");

setTimeout(()=>{
    console.log("Call me right now!!");
},0);
// even time is 0 still it will execute after main thread and also timeout is async funtion.
// this callback will only pushed to call stack in v8 once the call stack is empty.

setTimeout(()=>{
    console.log("Executed after 3 sec");
},3000);

function multiply(a, b) {
  const result = a * b;
  return result;
}

const temp = multiply(50, 50);

console.log(temp);