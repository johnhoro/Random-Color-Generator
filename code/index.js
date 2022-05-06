let first = document.querySelector(".first");
let second = document.querySelector(".second");

function getRandomColor() {
  return Math.floor(Math.random() * 16777216).toString(16);
}

first.addEventListener("click", function () {
  first.style.backgroundColor = "#" + getRandomColor();
});

second.addEventListener("mousemove", function () {
  second.style.backgroundColor = "#" + getRandomColor();
});
