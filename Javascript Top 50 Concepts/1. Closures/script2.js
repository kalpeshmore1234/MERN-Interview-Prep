function outerFunction(outerVariable){
    return function innerFunction(innerVariables){
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariables);
    }
}

const newFunction = outerFunction('outside');

// console.log(newFunction)
// newFunction();
newFunction('inside');