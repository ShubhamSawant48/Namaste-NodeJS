// module protect there function and variable from leaking thats wht export them 

var x = 15;

function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}

// console.log(module.export)   => gives empty object {}

// module.export = {
//   x: x,
//   calculateSum: calculateSum,
// };   another method

// module.export.x =x;
// module.export.calculateSum =calculateSum;  => another way

module.exports = { x, calculateSum };
