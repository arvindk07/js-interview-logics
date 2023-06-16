const arrInputs = [1, 5, 3, 7, 9, 23, 10, 11];

const lagestValue = (arr) => {
  firstLargestVlue = Math.max(...arr);
  index = arr.indexOf(firstLargestVlue);
  console.log(index);
  arr.splice(index, 1);
  secondLargestVlue = Math.max(...arr);
  return secondLargestVlue;
};

console.log(lagestValue(arrInputs));
