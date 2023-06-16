// turnary operator ========>>
let age = 25;
let t = age > 18 ? "Eligibale for Voting" : "Not Eligible for Voting";
console.log(t);

// ==========>>
let arr = [1, 3, 4, 6, 3, 5, 7, 8, 90, 3, 5, 2, 5, 7, 4, 6];

let count = {};

for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  count[num] = count[num] ? count[num] + 1 : 1;
}

console.log(count);
