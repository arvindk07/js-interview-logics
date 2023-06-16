const arrayNumber = [6, 23, 20, 65, 70, 90, 4];

const maxValueFunction = (arr) => {
  return arr.reduce(function (prev, curr) {
    return prev > curr ? prev : curr;
  });
};

console.log(maxValueFunction(arrayNumber));

const minValueFunction = (arr) => {
  return arr.reduce(function (prev, curr) {
    return prev < curr ? prev : curr;
  });
};

console.log(minValueFunction(arrayNumber));
