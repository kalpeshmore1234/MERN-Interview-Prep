// Apply, call, bind

// Problem Statement

let userDetails = {
    name: "Kalpesh More",
    Age: 24,
    Designation: "Frontend Developer",
    printDetails: function(){
        console.log(this.name)
    }
}

userDetails.printDetails();


let userDetails2 = {
    name: "Durvesh More",
    Age: 20,
    Designation: "Student"
}

// function borrowing
userDetails.printDetails.call(userDetails2);