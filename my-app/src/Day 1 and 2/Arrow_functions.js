// Normal function expression
const addNumbers = function (a, b) {
  return a + b;
};


//shorthand - Arrow function to skip function keyword. 
const addNumbersArrow = (a,b) => {
    return a + b;
}

console.log(addNumbersArrow(2, 3));

// or if it's a single return statement, you can simply skip the curly braces and the return statement like this
//IMPLICIT RETURN
const addImplicitReturn = (a,b)=> a+b;
console.log(addImplicitReturn(5, 3));


//Mini Excercise

//Write an arrow function that takes a status code as an argument and returns true if the status code is between 200 and 299 (inclusive),
//indicating a successful response, and false otherwise.

//Arrow function with if condition and return
const isValidStatusCode = (statusCode) => {
  if (statusCode>=200 && statusCode<=299){
    return true;
  }
  return false;
}

console.log(isValidStatusCode(200)); // Output: true
console.log(isValidStatusCode(300)); // false


//Arrow function with implicit return
const isValidStatusImplicit = (statusCode) => statusCode>=200 && statusCode <=299;

console.log(isValidStatusImplicit(301)); // Output: false
console.log(isValidStatusImplicit(250)); // Output: true

