const createMultiplier = (factor) => {
  return (number) => {
    return number * factor;
  };
};

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));


//independen excercise

const createGreeter = (greeting) =>{
  return (name) =>{
    return  (greeting + "," + name);
  }
}


const helloGreeting = createGreeter("hello");
const heyGreeting = createGreeter("hey");


console.log(helloGreeting("Renuka"));
console.log(heyGreeting("Tester2"))
