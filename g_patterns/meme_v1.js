function setup() {
  createCanvas(600, 600);
 
}


function draw() {
 background(220);
  background("black");


 for (let x = 0; x <= width; x += 50) {
  for (let y=0; y <= height; y += 100){
    translate(width/2, height/2);
  var r = frameCount / 1000 * PI;
  rotate(r);
      square(10 + random(10), 10 + random(10), 100);
      fill("yellow");

  }
  }
 }
