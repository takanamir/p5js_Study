var r = 50;

function setup() {
  createCanvas(480, 240);
}

function draw() {
  noStroke();
  background('skyblue');

  if (mouseIsPressed === true) {
    fill('pink');
  } else {
    fill('white');
  }

  ellipse(mouseX, mouseY, r, r);
}

// u キーを押したときに半径を大きくする
// function keyTyped() {
//   if (key === 'u') {
//     r += 10;
//   }
//   return false;
// }

// ↑キーを押したときに半径を大きくする
function keyPressed() {
  if (keyCode === UP_ARROW) {
    r += 10;
  }
  return false;
}
