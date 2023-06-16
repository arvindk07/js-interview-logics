const arrayNumber = [2, 4, 3, 1, 5, 3, 2];

//  Using the indexOf() method 1

const toFindDuplicate = (arrayNumber) =>
  arrayNumber.filter((item, index) => arrayNumber.indexOf(item) !== index);

const duplicateElement = toFindDuplicate(arrayNumber);

console.log(duplicateElement);

// Using the indexOf() method 2
const duplicates = arrayNumber.filter(
  (ele, index, arr) => arr.indexOf(ele) !== index
);

console.log(duplicates);
