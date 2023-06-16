let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(evenPosition(array));

function evenPosition(a) {
  let positionArray = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      positionArray.push(i + "==>" + array[i]);
    }
  }
  return positionArray;
}

console.log(oddPosition(array));

function oddPosition(b) {
  let positionOdd = [];
  for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 !== 0) {
      positionOdd.push(i + "==>" + b[i]);
    }
  }
  return positionOdd;
}
