// ============  Basic concepts ===========================

// random number
console.log(Math.random());

// floor Value
console.log(Math.floor(5.6));

// random between 1 to 9
console.log(Math.floor(Math.random() * 10));

// array
var courses = ["ReactJs", "NextJs", "VueJs", "NuxtJs", "React Native"];

console.log(courses[2]);

// document.getElementById
function changeName() {
  document.getElementById("changeName").innerHTML = "Webdev";
}

document.addEventListener("click", function () {
  document.getElementById("dev").innerHTML = "New Dev";
});

// ===========main logics =========================
let btn = document.getElementById("btn");
let result = document.getElementById("quote");

btn.addEventListener("click", function () {
  let Quote = quotes[Math.floor(Math.random() * quotes.length)];
  result.innerHTML = Quote;
});

let quotes = [
  "“All our dreams can come true; if we have the courage to pursue them.” – Walt Disney",
  "“However difficult life may seem, there is always something you can do and succeed at.” – Stephen Hawking",
  "“People begin to become successful the minute they decide to be.” – Harvey MacKay",
  "“It always seems impossible until it’s done.” – Nelson Mandela",
  "“Nothing is impossible, the word itself says ‘I’m possible’!” – Audrey Hepburn",
  "“Success isn’t overnight. It’s when everyday you get a little better than the day before. It all adds up.” – Dwayne Johnson",
  "“It does not matter how slowly you go as long as you do not stop.” – Confucius",
  "“The more you praise and celebrate your life, the more there is in life to celebrate.” – Oprah Winfrey",
  "“Do what you can, with what you’ve got, where you are.” – Teddy Roosevelt",
  "“Success consists of going from failure to failure without loss of enthusiasm.” – Winston Churchill",
  "“Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others.” – Amelia Earhart",
  "“Victory is sweetest when you’ve known defeat.” – Malcolm S. Forbes",
  "“Satisfaction lies in the effort, not in the attainment, full effort is full victory.” – Mahatma Gandhi",
  "“Energy and persistence conquer all things.” – Benjamin Franklin",
  "“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” – Thomas A. Edison",
  "“The only limit to our realization of tomorrow will be our doubts of today.” – Franklin D. Roosevelt",
  "“It is better to fail in originality than to succeed in imitation.” – Herman Melville",
  "“A man can succeed at almost anything for which he has unlimited enthusiasm.” – Charles Schwab",
  "“In most things success depends on knowing how long it takes to succeed.” – Montesquieu",
  "“There are no limits. There are only plateaus, and you must not stay there — you must go beyond them.” – Bruce Lee",
];
