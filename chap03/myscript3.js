var x = 0;

function setup() {
  // 最初に1回だけ実行される処理
  createCanvas(480, 240);
}

function draw() {
  // そのあと繰り返し実行される処理
  background(0);
  rect(x, 40, 50, 50);
  x++;
}
