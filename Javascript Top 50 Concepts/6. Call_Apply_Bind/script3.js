// Apply, call, bind

// Problem Statement

let userDetails = {
    name: "Kalpesh More",
    Age: 24,
    Designation: "Frontend Developer",
   
}

let printDetails =  function(city, state){
        console.log(this.name + " " + city + " " + state)
    }

printDetails.call(userDetails, "Mumbai");


let userDetails2 = {
    name: "Durvesh More",
    Age: 20,
    Designation: "Student"
}

// function borrowing
printDetails.call(userDetails2, "Mahad");
printDetails.apply(userDetails2, ["Mahad", "Maharashtra"])

let newfun = printDetails.bind(userDetails, "Mumbai", "Maharashtra");
newfun();