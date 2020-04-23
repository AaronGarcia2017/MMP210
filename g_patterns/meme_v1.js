var x=50;
var y=50;
var r = 255;
var g = 0;
var b = 255;

function setup() {
  createCanvas(600, 400);
  background("black");
}


function draw() {
  x=random()*width;
  y=random()*height;
  fill(map(y,0,height,255-r,r),map(y,0,height,255-g,g),map(x,0,width,255-b,b));
  noStroke();
  circle(x,y,50,50);
}