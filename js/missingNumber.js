const missNum = [1, 2, 3, 4, 6, 7, 9, 10];
const missArray = [];

const missingValue = (arr) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      missArray.push(i);
    }
  }
  return missArray;
};

console.log(missingValue(missNum));
