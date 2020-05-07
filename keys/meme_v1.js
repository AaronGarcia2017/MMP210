var music;
var bigX = 300,
  bigY = 200,
  bigSize = 200;
  var smallX = 100,
  smallY = 200,
  smallSize = 50;
var dragSmall = false
function preload() {
  music = loadSound('yay.wav');
  
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background('gray');
if (keyCode == 32) { // Space bar
  fill("yellow");
     textSize(50);
    textAlign(CENTER,CENTER);
    text(":)", 300, 70);
    }
  fill('white');
 textSize(20);
  textAlign(CENTER, CENTER);
  text("Guide the small circle into the big circle.", 240, 10);

if (mouseX > width / 1.5) {
    textSize(20);
    textAlign(CENTER,CENTER);
    text("Good Job! press space to make the big circle smile!", 240, 400);
  }
  if (dragSmall) {
    // this move the circle with the mouse if dragging
    smallX += mouseX - pmouseX;
    smallY += mouseY - pmouseY;
  }

  fill('yellow');
  circle(bigX, bigY, bigSize);

  fill('green');
  circle(smallX, smallY, smallSize);
}


function mousePressed() {
  // if the mouse is over the green circle start dragging
  if (dist(smallX, smallY, mouseX, mouseY) < smallSize / 2) {
    dragSmall = true;
  }
}

function mouseReleased() {
  dragSmall = false;
  
  // if small circle is inside big circle
  if (dist(smallX, smallY, bigX, bigY) < bigSize/2 + smallSize/2) {
    // play the sound here
    music.play();
  }


  }
