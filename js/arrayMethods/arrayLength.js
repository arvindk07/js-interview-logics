// length methods ============>>
let l1 = [20, 30, 10, 50, 10];
console.log(l1.length);
console.log(l1[0]);
console.log(l1[4]);

// without length method =========>>
let l2 = [10, 20, 30, 40, 50, 60, 70, 80];

console.log(arrayLength(l2));

function arrayLength(params) {
  var length = 0;
  while (l2[length] !== undefined) {
    length++;
  }
  return length;
}
