//add this require sentence in order to test out the node module
//require is used to import from another js

const hotelManagement = require("./junhong_hotelManagement.js");

//function 1: add rooms //enter the following console to add rooms with room number, type of room and the price for each room console.log(hotelManagement.addRoom(201,'Single Room','$'+200)); console.log(hotelManagement.addRoom(202,'Double Room','$'+300)); console.log(hotelManagement.addRoom(203,'Deluxe Room','$'+600));

//function 2: check total number of rooms //enter the following console to check number of rooms added console.log(hotelManagement.checkNumberOfRooms());

// function 3: add staff member //enter the following console to add staff member with the parameters of name and the position for each staff console.log(hotelManagement.addStaffMember('John','Manager')); console.log(hotelManagement.addStaffMember('Merry','Front Desk')); console.log(hotelManagement.addStaffMember('Alina','Cleaner'));

//function 4: check and get staff list for all staff member //enter the following console to check the staff member added in the staff list console.log('Staff List: ', hotelManagement.checkStaffList());

//function 5: get total number of staff //enter the following console to check number of staff member added console.log(hotelManagement.checkNumberOfStaff());

//function 6: check available room //enter the following console to check the availability of the rooms with the parameter of the room number console.log(hotelManagement.checkAvailableRoom(201)); console.log(hotelManagement.checkAvailableRoom(202)); console.log(hotelManagement.checkAvailableRoom(203));

//function 7: assigning room to guest //enter the following console to assign room to the guest with the parameters of the room number and guest name console.log(hotelManagement.assignRoom(201,'Jeremy'));

//check the availability of the asssigned room //enter the following console again to check the availability of the rooms being assigned with the parameter of the room number console.log(hotelManagement.checkAvailableRoom(201));