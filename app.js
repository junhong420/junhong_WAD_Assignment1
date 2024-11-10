const hotelManagement = require("./junhong_hotelManagement.js"); // require is used to import from another js
// const calculator = require("./calculator.js"); // require is used to import from another js


// This is my main app
console.log("Starting my first Node JS application");

// console.log("Calculator's Description: "+calculator.description);
// console.log("Perform add: "+calculator.add(2,3));
// console.log("Perform multiply: "+calculator.multiply(2,3));
// console.log("Perform subtract: "+calculator.subtract(2,3));
// console.log("Perform divide: "+calculator.divide(2,3));

//add rooms
console.log(hotelManagement.addRoom(201,'single'));
console.log(hotelManagement.addRoom(202,'double'));
console.log(hotelManagement.addRoom(203,'single'));
console.log(hotelManagement.addRoom(204,'double'));

// add staff member
console.log(hotelManagement.addStaffMember('john','Manager'));
console.log(hotelManagement.addStaffMember('Merry','Front Desk'));
console.log(hotelManagement.addStaffMember('Alina','Cleaner'));

// check staff list
console.log(hotelManagement.checkStaffList());

