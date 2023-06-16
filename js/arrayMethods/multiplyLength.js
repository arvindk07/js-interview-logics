// que====>> multiply by array length each elements

let arr = [1, 2, 3, 4, 5];
const arrLength = arr.length;

console.log(arrLength);

// method 1: ===>>for method
for (let i = 0; i < arrLength; i++) {
  console.log("multiply : " + arr[i] * arrLength);
}

// method 2: =======>> map method
// ====>>exmple
var a = [4, 9, 16];
var sqt = a.map(Math.sqrt);
console.log(sqt);

var multiplyArr = arr.map((item) => item * arrLength);
console.log(multiplyArr);

// method 3 =========>> funtions
let array = [2, 3, 4, 5, 6];
function multiplyArray(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    array[i] = array[i] * len;
  }
  return array;
}
const newArray = multiplyArray(array);
console.log("new array : " + newArray);
