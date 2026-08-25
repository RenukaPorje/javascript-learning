//prediction check

const greetUser = (name = "Guest") => {
  return `Hello, ${name}`;
};

console.log(greetUser());
console.log(greetUser("Renuka"));

//Independent excercise

const formatPriority = (level = "medium") => {
  return `Priority level: ${level}`;
}

console.log(formatPriority());
console.log(formatPriority("high"));