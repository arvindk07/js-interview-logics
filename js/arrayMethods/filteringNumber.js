console.log(typeof 42);

console.log(typeof "string");

function numbersOnly(arr) {
  return arr.filter((item) => typeof item === "number");
}

console.log(numbersOnly(["num1", 20, 40, "num2"]));
