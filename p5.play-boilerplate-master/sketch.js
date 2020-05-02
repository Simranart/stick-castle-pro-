
var rect1;
var tri1;
var square1;

function setup() {
  createCanvas(400,400);
  
 rect1 = new Rect1(200,200,100,100);
 rect2 = new Rect2(100,200,50,100);
}

function draw() {
  background(255,255,255);
  
  rect1.display();
  rect2.diaplsy();

  drawSprites();
}