function setup() {
  createCanvas(480, 240);
  background('skyblue');

  var c = color('pink');
  // fill(c);
  //
  // fill('pink'); // 塗りがピンクになる

  // noFill(); // 塗りを設定しない

  stroke(c);
  strokeWeight(5); // 線の太さを指定
  // noStroke(); // 線の設定を無効にする

  ellipse(width/2, height/2, 200, 100);
}
