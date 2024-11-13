# Assignment 1

This is a hotel management node module. It manages to add room, check total number of rooms, add staff member, check staff list, check total number of staff, check room availability and assign room.

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

1. Clone the repository to your own repository.<br>
2. Create an `app.js` file for testing out the node module.<br>
3. Copy the following codes below into the `app.js` that just created. Description of the function is shown in the code below that are bulleted. <br>
4. Start the node module by running `app.js`.<br>
5. Type `node app.js` or `nodemon app.js` at the terminal to run, if you have `nodemon` installed.<br>
6. Then all the output will be shown after running the `app.js`.<br>

**Codes to copy and paste on `app.js`:**<br>

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

- **Function 2: Check total number of rooms**<br>
- Enter the following console to check number of rooms added <br>

```
console.log(hotelManagement.checkNumberOfRooms());
```

^Total number of rooms will be shown

- **Function 3: Add staff member**<br>
- Enter the following console to add staff member with the parameters of name and the position for each staff<br>

```
console.log(hotelManagement.addStaffMember('John','Manager'));
console.log(hotelManagement.addStaffMember('Merry','Front Desk'));
console.log(hotelManagement.addStaffMember('Alina','Cleaner'));
```

^Staff member will be added

- **Function 4: Check and get staff list for all staff member**<br>
- Enter the following console to check the staff member added in the staff list<br>

```
console.log('Staff List: ', hotelManagement.checkStaffList());
```

^Display all the staff member from the staff list

- **Function 5: Get total number of staff**<br>
- Enter the following console to check number of staff member added<br>

```
console.log(hotelManagement.checkNumberOfStaff());<br>
```

^Total number of staff will be shown

- **Function 6: Check room availability** <br>
- Enter the following console to check the availability of the rooms with the parameter of the room number<br>

```
console.log(hotelManagement.checkAvailableRoom(201));
console.log(hotelManagement.checkAvailableRoom(202));
console.log(hotelManagement.checkAvailableRoom(203));
```

^Room availabilities will be shown

- **Function 7: Assigning room to guest**<br>
- Enter the following console to assign room to the guest with the parameters of the room number and guest name<br>

```
console.log(hotelManagement.assignRoom(201,'Jeremy'));
```

^Room assigned to guest will be shown

- **Check the availability of the asssigned** <br>
- Enter the following console again to check the availability of the rooms being assigned with the parameter of the assigned room number<br>

```
console.log(hotelManagement.checkAvailableRoom(201));<br>
```

^Availability of the assigned room will be shown as not available as room has assigned to guest
