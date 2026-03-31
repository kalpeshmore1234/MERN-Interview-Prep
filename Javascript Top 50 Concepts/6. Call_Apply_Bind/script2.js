// Apply, call, bind

// Problem Statement

let userDetails = {
    name: "Kalpesh More",
    Age: 24,
    Designation: "Frontend Developer",
   
}

let printDetails =  function(){
        console.log(this.name)
    }

printDetails.call(userDetails);


let userDetails2 = {
    name: "Durvesh More",
    Age: 20,
    Designation: "Student"
}

// function borrowing
printDetails.call(userDetails2);