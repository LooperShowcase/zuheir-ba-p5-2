function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  translate(width / 2, height / 2);
  rotate(-90);
  background(180, 202, 237);

  let hr = hour();
  let mn = minute();
  let sc = second();

  push();
  rotate(+90);
  textFont("Georgia");
  textSize(22);
  fill("255");
  text("Zoo Hair", 50, 180);
  text(hr + ":" + mn + ":" + sc, -50, -180);
  text("12", -13, -80);
  text("9", -100, 0);
  text("3", 80, 0);
  text("6", 0, 100);
  pop();

  noFill();
  strokeWeight(1);
  stroke("#264653");
  strokeWeight(7);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 02, 300, 300, 0, secondAngle);
  noStroke();

  stroke("#006d77");
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 260, 260, 0, minuteAngle);
  noStroke();
  stroke("#2a9d8f");

  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 220, 220, 0, hourAngle);
  noStroke();

  push();
  rotate(secondAngle);
  stroke("#264653");
  line(0, 0, 60, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#006d77");
  line(0, 0, 50, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#2a9d8f");
  line(0, 0, 35, 0);
  pop();

  push();
  stroke("white");
  point(0, 0, 10, 0);
  pop();

  push();
  text(hr + ":" + mn + ":" + sc, 0, 0);
  pop();
}
