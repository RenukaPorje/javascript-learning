const scores = [45, 92, 60, 78, 30];

const passing = scores.filter(function (score) {
  return score >= 60;
});
console.log(passing);

const impossible = scores.filter(function (score) {
  return score > 100;
});
console.log(impossible);

console.log(scores);

//indenpendent practice

const bugPriorities = [1, 3, 2, 5, 4];

const highPriority = bugPriorities.filter(function (priority) {
  return priority >= 4;
});

console.log(highPriority);
console.log(bugPriorities);

const invalidPriority = bugPriorities.filter(function (priority) {
  return priority >= 75;
});

console.log(invalidPriority);
