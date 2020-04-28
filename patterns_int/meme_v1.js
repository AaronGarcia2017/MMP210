let rSlider, gSlider, bSlider;
let slider;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15);
  noStroke();

  var saveButton = createButton('Save Image');
	saveButton.mousePressed(saveImage);

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 160);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 188);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 215);

   slider = createSlider(0, 255, 127);
   slider.position(20,245);
}
function saveImage() {
	save('pattern.png');
}
function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
fill(slider.value(), 300, 255, 127);


  background(r, g, b);
  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);
text('shape', 170, 120);

triangle(30, 400, 250, 20, 470, 400)

square(470, 200, 200);
}