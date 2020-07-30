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

function mousePressed() {
  r += 10;
  return false;
}
