const arrayEle = [2, 5, 9, 4];

const sumOfNumbers = (arr) => {
  return arr.reduce((prev, curr) => {
    return prev + curr;
  });
};

console.log(sumOfNumbers(arrayEle));
