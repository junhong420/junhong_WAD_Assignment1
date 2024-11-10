
let hotelManagement = {


    //start from here
    rooms:[],
    staffMember:[],

    //function 1
    //add rooms
    addRoom(roomNumber, type, price){
        this.rooms.push({
            roomNumber:roomNumber,
            type:type,
            price:price
        }
        
        );
        // return "Room "+ roomNumber +" of type "+ type +" added successfully";
        return `Room number: ${roomNumber}. Type: ${type}, added successfully!`;
    },

    //function 2
    //add staff member
    addStaffMember(name, position){
        this.staffMember.push({
            name:name,
            position:position
        }
        
        );
        // return "Staff Member "+" of name: "+ name +" added successfully";
        return `Staff member: ${name}. Work position: ${position}, added successfully!`;

    },

    checkAvailableRoom(roomNumber){

    },

    assignRoom(){},

    //check staff list
    checkStaffList(){
        return this.staffMember;
        // return this.staffMember.length;
    }


    
}

module.exports = hotelManagement;