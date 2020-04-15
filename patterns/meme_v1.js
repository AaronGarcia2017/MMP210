//global scope
function setup() {
  createCanvas(640, 360);
 
  pattern(); // generate a pattern to start

  var patternButton = createButton('New Pattern');
  patternButton.mousePressed(pattern);

    var saveButton = createButton('Save Image');
  saveButton.mousePressed(saveImage);
}

function saveImage() {
  save('pattern.png');
} 

function pattern() {
  background('black');
  noStroke();
  fill('white');
  for (let x = 0; x <= width; x += 50) {
    stroke(1000);
    ellipse(x, 100, random(10, 100));
    ellipse(x, 300, random(10, 200));
  }
for (let y = 0; y <= height; y += 50) {
    square(200, y, random(10, 100));
     square(270, y, random(10, 100));
  }
}