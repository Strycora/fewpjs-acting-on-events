let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left); // "180px"
console.log(dodger.style.bottom); // "0px"
dodger.style.bottom = "0px";

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10)
  if (left > 0) {
    dodger.style.left = `${left + 1}px`
  }
}

