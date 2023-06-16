const employees = [
  {
    name: "Dev",
    age: 20,
  },
  {
    name: "Saktiman",
    age: 55,
  },
  {
    name: "Johnwick",
    age: 40,
  },
  {
    name: "Caption America",
    age: 30,
  },
  {
    name: "Dainy",
    age: 18,
  },
  {
    name: "Webdev",
    age: 25,
  },
];

const filterMethod = employees.filter((item) => {
  return item.age > 30;
});

console.log(filterMethod);

const findMethod = employees.find((item) => {
  return item.age > 20;
});

console.log(findMethod);
