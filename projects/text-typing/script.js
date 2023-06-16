// document

// slice
// let str = "webdev";
// console.log(str.slice(0, 2));

// set interval
// setIterval(callback,delay) ====syntax==========>>
// setInterval(function () {
//   alert("webdev");
// }, 5000);

// ============ main logics ====================

const name = "Arvind Kumar";
let index = 0;

function typingName() {
  document.body.innerText = name.slice(0, index);
  index++;
  if (index > name.length) {
    index = 0;
  }
}

setInterval(typingName, 200);
