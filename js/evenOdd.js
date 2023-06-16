const numbers = [1, 3, 4, 1, 4, 6, 8, 9, 2];

const evenNum = numbers.filter((item) => {
  return item % 2 == 0;
});

console.log("Even Number", evenNum);

const oddNumber = numbers.filter((item) => {
  return item % 2 == !0;
});

console.log("Odd Number", oddNumber);
