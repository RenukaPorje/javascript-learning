const runWithLogging = (number, operation) => {
  console.log(`Starting operation on ${number}`);
  const result = operation(number);
  console.log(`Finished. Result: ${result}`);
  return result;
};

const double = (n) => n * 2;
const square = (n) => n * n;

runWithLogging(5, double);
runWithLogging(8, square);

console.log(runWithLogging(5, double));
console.log(runWithLogging(8, square));

//prediction check

const anotherRunWithLogging = (number, operation) => {
  console.log(`Starting operation on ${number}`);
  const result = operation(number);
  console.log(`Finished. Result: ${result}`);
  return result;
};

const triple = (n) => n * 3;

console.log(anotherRunWithLogging(4, triple));


//excercise

const applyDiscount = (price, discountFn) =>{
  const result = discountFn(price);
  console.log(result);
  return result;
}

const tenPercentOff = (discountedPrice) => discountedPrice*(90/100);
const halfOff = (discountedPrice) => discountedPrice*(50/100);

applyDiscount(635, tenPercentOff);
applyDiscount(540, halfOff);


console.log(applyDiscount(635, tenPercentOff));
console.log(applyDiscount(540, halfOff));

