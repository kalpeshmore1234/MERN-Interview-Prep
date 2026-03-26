//In JavaScript, a closure is a function that "remembers" its outer scope(means its outer variables and functions) even after that outer function has finished executing

let myName = "Kalpesh";
function printName() {
  console.log(myName);
}

myName = "Yash"
printName();
