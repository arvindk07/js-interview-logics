// document =====> menupulate dom menupulation
// document.getElementById("a").style.color = "green";
// document.getElementById("b").style.fontSize = "70px";

// function colorChange() {
//   document.getElementById("demo").innerHTML = "Hy Devilal";
// }

// =====>>save data
// function save() {
//   let getValue = document.getElementById("name").value;
//   document.getElementById("data").innerHTML = getValue;
// }

// =======>> add event listener
// document.addEventListener("click", function () {
//   document.getElementById("addevent").innerHTML = "webdev";
// });

// =========>> boderradius
// let name = document.getElementById("name");
// let border = document.getElementById("border");

// border.addEventListener("click", function () {
//   name.style.borderRadius = "30px";
// });

// <<==================== main logics ===================>>
let paragraph = document.getElementById("text");

// fontFamily ===>>
function changeFontfamily() {
  var font = document.getElementById("select").value;

  switch (font) {
    case "arial":
      paragraph.style.fontFamily = "arial";
      break;
    case "monospace":
      paragraph.style.fontFamily = "monospace";
      break;
    case "georiga":
      paragraph.style.fontFamily = "georiga";
      break;
    case "default":
      paragraph.style.fontFamily = "";
      break;
  }
}

// font color =======>>
var black = document.getElementById("black");
var blue = document.getElementById("blue");
var green = document.getElementById("green");
var pink = document.getElementById("pink");

black.addEventListener("click", function () {
  paragraph.style.color = "black";
});

blue.addEventListener("click", function () {
  paragraph.style.color = "blue";
});

green.addEventListener("click", function () {
  paragraph.style.color = "green";
});

pink.addEventListener("click", function () {
  paragraph.style.color = "pink";
});

// font size =============>>

let fontsize = document.getElementById("");

fontsize.addEventListener("click", function (value) {
  paragraph.style.fontSize = value;
});

function rangeSlide(value) {
  document.getElementById("rangeValue").innerHTML = value;
}
