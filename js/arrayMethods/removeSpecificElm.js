let arr = [20, 10, 30, 50, 49, 40, 44];

// =====>> find index of
let i = arr.indexOf(50);
console.log(i);

// =========>> remove element using splice
var r = arr.splice(2, 3);
console.log(r);
console.log(arr);

// =========>> remove specific element from array
let arr1 = [20, 10, 30, 50, 49, 40, 44];
const index1 = arr1.indexOf(49);
console.log("LENGTH :", index1);

if (index1 > -1) {
  arr1.splice(index1, 1);
}
console.log(arr1);

// ============>>

let a1 = [1, 2, 4, 5, 6];
let n1 = [];
for (let i = 0; i < a1.length; i++) {
  if (a1[i] % 2 === 0) {
    n1.push(a1[i]);
  }
}
console.log("even", n1);

// =====================>>
function evenNum(newA) {
  var n2 = [];
  for (let i = 0; i < newA.length; i++) {
    if (newA[i] % 2 === 0) {
      n2.push(newA[i]);
    }
  }
  return n2;
}
console.log(evenNum(a1));

// filter method =====================>>
let evenFilter = a1.filter((val) => {
  return val % 2 === 0;
});
console.log("filter method: ", evenFilter);

// example ===========>>
let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let value = 6;
let newArrr = array1.filter((item) => item != value);
console.log("remove 6", newArrr);

// using for loop =======>>
let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let outArray = [];
let count = 0;
let search = 4;
for (let i = 0; i < someArray.length; i++) {
  if (someArray[i] === search && count === 0) {
    count++;
  } else {
    outArray.push(someArray[i]);
  }
}
console.log("remove 4:", outArray);
