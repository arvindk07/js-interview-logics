// 1. length => find the lenth of an array
let arrlength = [20, 40, 30];
console.log("length of an gievn array:", arrlength.length);

// 2. shift => remove first element fron array
let shiftArr = [20, 30, 40, 50];
console.log("Removed Value", shiftArr.shift());
console.log("Rest Value", shiftArr);

let sha = [];
console.log(sha.shift()); //undefind

// 3. Unshift =>add the element in the begining of an array
let unshiftArr = [20, 30, 40, 50];
console.log(unshiftArr.unshift("10"));
console.log(unshiftArr);

// add multiple elements also
console.log(unshiftArr.unshift(60, 70));
console.log(unshiftArr);

// 4. pop => remove an element from the end of array
let popArr = [30, 50, 70];
console.log("Pop value", popArr.pop());
console.log("rest value", popArr);

// 5. push => add an element from the end of array
let pushArr = [30, 50, 70];
console.log("push elements", pushArr.push("90"));
console.log("after pushing array:", pushArr);

// 6. indexOf => find the index of an elements
let iArray = [10, 20, 30, 40];
console.log("index of 40", iArray.indexOf(40));
console.log("index of 70", iArray.indexOf(70)); //if element not found in given array then return -1

// 7. lastIndexOf => find the last index of an array
let lastIA = [20, 10, 60, 40, 30, 20, 60, 70, 50];
console.log("last index of 30:", lastIA.lastIndexOf(40));
console.log("last index of 60:", lastIA.lastIndexOf(60));

// 8. includes => it check the element present in given array if element occurs its return true otherwise return flase
let includesArr = [20, 10, 60, 40, 30, 20, 60, 70, 50];
console.log(includesArr.includes(60)); // true
console.log(includesArr.includes(90)); // false

// 9. join => join is use to convert any array into string
let joinArr = [20, 10, 60, 40, 30, 20, 60, 70, 50];
console.log(joinArr.join("-"));
console.log(joinArr.join(" "));
console.log(joinArr.join(""));

// 10. reverse => reverse the array
let reverseArr = [20, 10, 60, 40, 30, 20, 60, 70, 50];
console.log(reverseArr.reverse());

// 11. concat => join to the arrays
let conArr = [10, 20, 30];
console.log(conArr.concat(50, 60));

let conArr1 = [70, 80, 90];
let conArr2 = [100, 110, 120];
console.log(conArr.concat(conArr1).concat(conArr2));

// 12. forEach => iterate the array
let forArray = [20, 30, 40, 50];
forArray.forEach(function (value, index) {
  console.log("Iterate the value using forEach:", value);
});

forArray.forEach((item, index) => {
  console.log("Iterate the value using forEach using arrow funtion:", item);
});

// 13. every => check every element if contion are satisfy the return true otherwise return false
let everyArr = [10, 20, 30, 40];
let everyArray = everyArr.every(function (value, index) {
  return value > 5;
});
console.log("every :", everyArray);

// 14. some =>
let someArr = [10, 20, 30, 40, 50];
let someArray = someArr.some(function (value, index) {
  return value > 20;
});
console.log("some :", someArray);

// 15. filter =>
let filterArr = [10, 50, 30, 20, 40, 60, 70];
let filterArray = filterArr.filter(function (value, index) {
  return value > 40;
});
console.log("filter Array:", filterArray);

// 16. slice =>
let sliceArr = [10, 20, 30, 40, 50];
console.log("slice", sliceArr.slice(1, 3));

// 17. splice =>
let spliceArr = [10, 20, 30, 40, 50];
console.log("splice", spliceArr.splice(1, 3));

// 18. map =>
let mapArr = [1, 2, 3, 4, 5];
let mapedValue = mapArr.map((value, index) => {
  return value * 2;
});
console.log("map", mapedValue);

// without map
let mapArr1 = [1, 2, 3, 4, 5];
let mapped = [];
let marray;
for (let i = 0; i < mapArr1.length; i++) {
  marray = mapArr1[i] * 5;
  mapped.push(marray);
}
console.log(mapped);
