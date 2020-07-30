function setup() {
  createCanvas(480, 240);
  background('skyblue');

  textAlign(LEFT, TOP);
  textSize(32);
  // textFont('Impact');
  textStyle(BOLD);

  fill('pink');
  strokeWeight(5);
  stroke('gray');
  text("hello world", 100, 100);

  ellipse(100, 100, 10, 10);
}
