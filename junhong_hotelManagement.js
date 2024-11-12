
let hotelManagement = {


    //start from here
    rooms:[],
    staffMember:[],

    //function 1: add rooms
    //this function will add rooms into the array of rooms
    addRoom(roomNumber, type, price){
        const room = { roomNumber, type, price, isOccupied: false }; //isOccupied: false = assign the room as not occupied first
        this.rooms.push(room); //pass inside and push to add
        
        // return "Room "+ roomNumber +" of type "+ type +" added successfully";
        return `Room number: ${roomNumber}. Type: ${type}. Price: ${price} added successfully!`;
    },

    //function 2: check total number of rooms
    //this function will check the number of rooms added into the array of rooms
    checkNumberOfRooms(){
        return `Total number of rooms: ` + this.rooms.length;
        // return this.staffMember;
    },



    //function 3: add staff member
    //this function will add staff member into the array of staffmember(staff list)
    addStaffMember(name, position){
        this.staffMember.push({
            name:name,
            position:position
        }
        
        );
        // return "Staff Member "+" of name: "+ name +" added successfully";
        return `Staff member: ${name}. Work position: ${position}, added successfully!`;

    },

    //function 4: check and get staff list for all staff member
    //this function will display all the staff member in the array of staffmember(staff list)
    checkStaffList(){
        // return `Staff List: ` +  JSON.stringify(this.staffMember);
        return this.staffMember;
    },


    //function 5: get total number of staff
    //this function will get the total number of staff in the array of staffmember(staff list)
    checkNumberOfStaff(){
        return `Total number of staff: ` + this.staffMember.length;
    },

    //function 6: check available room
    //this function will check the availability of the room by checking the room number
    //if the room number is not assigned, it will show the room number is available, otherwise if the room number is assigned to guest or not existing, it will show the room number is not available
    checkAvailableRoom(roomNumber){
        const room = this.rooms.find((room) => room.roomNumber === roomNumber);
        if (room && !room.isOccupied) {
            return `Room ${roomNumber} is available.`;
        }
        return `Room ${roomNumber} is not available.`;

    },

    //function 7: assigning room to guest
    //this function is to assign room to guest by checking the room number
    //if the room number is assigned to guest then the availability of the assigned room will become occupied and show the room number has been assigned to the guest name.
    //otherwise if the room number is assigned to guest or not existing, it will show the room number is not available
    assignRoom(roomNumber, guestName){
        const room = this.rooms.find((room) => room.roomNumber === roomNumber && !room.isOccupied);
        if (room) {
            room.isOccupied = true;
            room.guest = guestName;
            return `Room ${roomNumber} has been assigned to ${guestName}.`;
        }
        return `Room ${roomNumber} is not available.`;
    },


    


    
}

module.exports = hotelManagement;