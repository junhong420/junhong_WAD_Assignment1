// const calculator = require("./junhong_ModuleName.js"); // require is used to import from another js
const calculator = require("./calculator.js"); // require is used to import from another js



console.log("Starting my first Node JS application");

console.log("Calculator's Description: "+calculator.description);
console.log("Perform add: "+calculator.add(2,3));
console.log("Perform multiply: "+calculator.multiply(2,3));
console.log("Perform subtract: "+calculator.subtract(2,3));
console.log("Perform divide: "+calculator.divide(2,3));
