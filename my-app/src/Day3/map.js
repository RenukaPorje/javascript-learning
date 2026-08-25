const bugCounts = [3, 0, 5];

const doubled = bugCounts.map(function (count) {
  return count * 2;
});
console.log(doubled);

const noReturn = bugCounts.map(function (count) {
  count * 2; // no return keyword
});
console.log(noReturn);

console.log(bugCounts);

//indepedent excercise

const responseTimes = [120, 200, 150, 300, 250];

const responseTimesInSec = responseTimes.map(function (response) {
  return response / 1000;
});

console.log(responseTimesInSec);
console.log(responseTimes);
