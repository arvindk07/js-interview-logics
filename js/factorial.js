const inputNum = prompt("Please Enter a Number");

var fact = 1;

if (inputNum < 0) {
  console.log(`foctorial of ${inputNum} is not posible`);
} else {
  for (let i = 1; i <= inputNum; i++) {
    fact = fact * i;
  }

  console.log(`factorial of ${inputNum} is ${fact}`);
}
