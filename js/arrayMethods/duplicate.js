let arr = [
  "sunady",
  "monday",
  "friday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "monday",
  "tuesday",
  "friday",
];

// duplicate array ===========>>
let count = 0;
for (let i = 0; i < arr.length; i++) {
  for (j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
      break;
    }
  }
}
console.log("duplicate array: " + count);

// find each occurance ===========>>
let duplicateArray = {};
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  duplicateArray[num] = duplicateArray[num] ? duplicateArray[num] + 1 : 1;
}
console.log(duplicateArray);
