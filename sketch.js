function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  rotate(-90);
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(7);
  stroke("Green");
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke("Red");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  stroke("Blue");
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  push();
  rotate(secondAngle);
  stroke("Green");
  line(0, 0, 90, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("Red");
  line(0, 0, 70, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("Blue");
  line(0, 0, 50, 0);
  pop();

  stroke("Yellow");
  point(0, 0);

  push();
  fill("Yellow");
  noStroke();
  rotate(90);
  textSize(25);
  textAlign(CENTER);
  text(hr + ':' + mn + ':' + sc, 10, 100);
  pop();

  }
