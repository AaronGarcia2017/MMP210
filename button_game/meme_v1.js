var r, g, b;
var x, y;
var score = 0;
var time = 0;
var endtime = 600;
function preload() {
  music = loadSound('ding.mp3');
  }
function update() {
 r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    x = random(0,width);
    y = random(0,height);

}
function setup() {
  createCanvas(600, 600);
 update();
}

function draw() {
background(r,g,b);
stroke(r,g,b);
ellipse(x,y,50);

if (time>=endtime) {
  textSize(30);
  text("Score: "+ score, 10,100);
   text("Reload the Page to try again!", 10, 60);
} else{
time ++;
}
textSize(20);
 text("Time: "+ time+"/"+endtime, 10,30);
}


function mousePressed() {
    var d = dist(mouseX, mouseY, x, y);
  if (d < 25 && time<endtime) {
   update();
   score ++;


  }



}