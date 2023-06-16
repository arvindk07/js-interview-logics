// method 1
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(`a : ${a} and b: ${b}`);

// method 2
let x = 8;
let y = 4;

x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log(`x : ${x} and y: ${y}`);

// method 3 single notation
let m = 10;
let n = 20;
m = n + ((n = m), 0);

console.log(`m : ${m} and n: ${n}`);

// method 4 destructing assignment
let p = 10;
let q = 20;

[p, q] = [q, p];

console.log(`p : ${p} and q: ${q}`);

// method 5
let c = 20;
let d = 40;

c = (c * d) / (d = c);

console.log(`c : ${c} and d: ${d}`);
