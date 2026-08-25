function collectTags(...tags) {
  console.log(tags);
  console.log(tags.length);
}

collectTags("smoke", "critical");

const scores = [88, 45, 92, 60];
const [top, ...rest] = scores;
console.log(rest);

//Independent ex

function sumScores(...numbers) {
  console.log(numbers);
  console.log(numbers.length);
  const total = numbers.reduce(function (acc, current) {
    return (acc += current);
  }, 0);
  return total;
}

const result = sumScores(45, 57, 37, 89, 67, 54, 24, 25, 10);
console.log(result);

console.log("Independet ex");

function summedMarks(...marks) {
  console.log(marks);
  console.log(marks.length);

  const totalMarks = marks.reduce(function (acc, currentMarks) {
    return (acc += currentMarks);
  }, 0);
  return totalMarks;
}

const markSheet = summedMarks(65, 76, 23, 19, 87, 9, 14, 91, 45, 98);
console.log(markSheet);

const testTimes = [3, 6, 7, 8, 10, 23];
const [fastest, ...others] = testTimes;

console.log(fastest);
console.log(others);
