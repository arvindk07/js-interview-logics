let a = [2, 3, 4, 5];
a.push(6);
console.log(a);

var i = a.indexOf(3);
console.log(i);

var j = a.indexOf(8);
console.log(j);

// =======>> main logics

var students = [
  "Jhony",
  "Dev",
  "Aleena",
  "Mohit",
  "Surabhi",
  "Jhony",
  "Salman",
];

console.log(students);
function getUniq(arr) {
  var unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) == -1) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

let uniq = getUniq(students);
console.log(uniq);
