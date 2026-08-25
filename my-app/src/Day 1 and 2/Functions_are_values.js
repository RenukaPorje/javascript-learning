const greet = () => {
  return "Hello";
};

const sayHello = greet;

console.log(typeof greet);
console.log(typeof sayHello);
console.log(sayHello());


//Excercise

const doubleNumber = (number1) => {
   let number2 = number1*2
    return number2;
}

const multiplyByTwo = doubleNumber;

console.log(multiplyByTwo(5));
