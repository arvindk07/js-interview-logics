var enterNumber = prompt("Enter a number");

if (enterNumber == 1) {
  console.log(`${enterNumber} is not a prime nor composite `);
} else if (enterNumber < 1) {
  console.log(`prime number of ${enterNumber} is not posible`);
} else {
  for (let i = 2; i < enterNumber; i++) {
    if (enterNumber % i == 0) {
      var result = `${enterNumber} is not Prime`;
    } else {
      var result = `${enterNumber} is a Prime`;
    }
  }
  console.log(result);
}
