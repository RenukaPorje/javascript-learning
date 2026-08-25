const priorities = [3, 1, 20, 2, 11];

const wrongSort = [...priorities];
wrongSort.sort();
console.log(wrongSort);

const rightSort = [...priorities];
rightSort.sort(function (a, b) {
  return a - b;
});
console.log(rightSort);

console.log(priorities);

//indendent ex

console.log("independent");

const bugCounts = [7, 87, 34, 8, 14, 44, 10];

console.log(bugCounts);

const wrongSortAgain = [...bugCounts];
wrongSortAgain.sort();
console.log(wrongSortAgain);

const rightSortAgain = [...bugCounts];

rightSortAgain.sort(function (a, b) {
  return b - a;
});

console.log(rightSortAgain);
