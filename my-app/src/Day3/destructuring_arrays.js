/*
const scores = [88, 45, 92];

const [top, , third] = scores;
console.log(top);
console.log(third);

const [a, b, c, d = 100] = scores;
console.log(d);

const [x = 0] = [];
console.log(x);
*/

//independent ex

const apiTimings = [120, 150, 300];

const [first, , third] = apiTimings;
console.log(first);
console.log(third);

const retryDelays = [150, 200];
const [firstDelay, secondDelay, thirdDelay = 100] = retryDelays;
console.log(thirdDelay);
