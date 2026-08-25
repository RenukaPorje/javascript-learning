

const addNumbers = function (a, b) {
  return a + b;
};

console.log(addNumbers(5, 3));

//Function expression — a function created and stored inside a variable, like any other value


/* The practical difference: a function declaration can be called before it appears in the file 
(JavaScript sets it up ahead of time). 
A function expression cannot — it only exists once that line of code actually runs, exactly like 
any other const/let variable. */

 /* //What happens when you write it the same way as a declaration :
console.log(sayHiExpression());

const sayHiExpression = function () {
  return "Hi, from a function expression";
}; */


let severity = "medium";
let daysOpen = 9;


const calculateBugPriority = function (severity, daysOpen){
    if (severity === "critical" && (daysOpen>0 && daysOpen<3)){
        return (`Severity: ${severity}, Open for: ${daysOpen} days. Needs immediate attention.`);
    }
    else if (severity === "high" && (daysOpen>= 3 && daysOpen< 7)){
        return (`Severity: ${severity}, Open for: ${daysOpen}. Should be prioritized.`);
    }
    else if (severity === "medium" && (daysOpen>=7 && daysOpen<10)){
        return (`Severity: ${severity}, Open for: ${daysOpen} days. Monitor closely.`);
    }

    else if (severity === "low" && daysOpen>=10){
        return (`Severity: ${severity}, Open for: ${daysOpen} days. Can be fixed in the future.`);
    }
    else {
        return (`Severity: ${severity}, Open for: ${daysOpen} days. Invalid bug severity level.`);
    }
}


console.log (calculateBugPriority("critical", 3));






