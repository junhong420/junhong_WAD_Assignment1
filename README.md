# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

# References

Provide the references that you have used to support your assignment.<br>
-lab2, google<br>

## **My Functions:**<br>

`addRoom` - Add new room to the hotel. <br>
`checkNumberOfRooms` - Get total number of rooms added.<br>
`addStaffMember` - Add new staff member to the hotel.<br>
`checkStaffList` - List all staff members.<br>
`checkNumberOfStaff` - Get total number of staff member added.<br>
`checkAvailableRoom` - Check if a room is available.<br>
`assignRoom` - Assign an available room to a guest. <br>

## **Instructions:**<br>

1. Create an `app.js` file for testing out the node module.<br>
2. Copy the following codes below into the `app.js` that just created. Description of the function is shown in the code below that are bulleted. <br>
3. Start the node module by running `app.js`.<br>
4. Type `node app.js` or `nodemon app.js` at the terminal to run, if you have `nodemon` installed.<br>
5. Then all the output will be shown after running the `app.js`.<br>

**Codes to copy and paste on app.js:**<br>

- Add this require sentence in order to test out the node module (require is used to import from another js) <br>

```
const hotelManagement = require("./junhong_hotelManagement.js");
```

- **Function 1: Add rooms**<br>
- Enter the following console to add rooms with room
  number, type of room and the price for each room<br>

```
console.log(hotelManagement.addRoom(201,'Single Room','$'+200));
console.log(hotelManagement.addRoom(202,'Double Room','$'+300));
console.log(hotelManagement.addRoom(203,'Deluxe Room','$'+600));
```

^Rooms will be added

//function 2: check total number of rooms<br>
//enter the following console to check number of rooms added<br>

```
console.log(hotelManagement.checkNumberOfRooms());
```

// function 3: add staff member<br>
//enter the following console to add staff member with the parameters of name and the position for each staff<br>

```
console.log(hotelManagement.addStaffMember('John','Manager'));
console.log(hotelManagement.addStaffMember('Merry','Front Desk'));
console.log(hotelManagement.addStaffMember('Alina','Cleaner'));
```

//function 4: check and get staff list for all staff member<br>
//enter the following console to check the staff member added in the staff list<br>

```
console.log('Staff List: ', hotelManagement.checkStaffList());
```

//function 5: get total number of staff<br>
//enter the following console to check number of staff member added<br>

```
console.log(hotelManagement.checkNumberOfStaff());<br>
```

//function 6: check available <br>
//enter the following console to check the availability of the rooms with the parameter of the room number<br>

```
console.log(hotelManagement.checkAvailableRoom(201));
console.log(hotelManagement.checkAvailableRoom(202));
console.log(hotelManagement.checkAvailableRoom(203));
```

//function 7: assigning room to guest<br>
//enter the following console to assign room to the guest with the parameters of the room number and guest name<br>

```
console.log(hotelManagement.assignRoom(201,'Jeremy'));
```

//check the availability of the asssigned <br>
//enter the following console again to check the availability of the rooms being assigned with the parameter of the room number<br>

```
console.log(hotelManagement.checkAvailableRoom(201));<br>
```
