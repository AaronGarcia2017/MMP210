//global scope
var cat;
function preload() {
	cat = loadImage("cat.jpg")
}

function setup() {
	createCanvas(300,190);
}

function draw() {

	background('gray');
	// image(cat, 0, 0);

	fill('white');
	ellipse(20, 150, 30)
	noStroke(0);


	textSize(10);
	
	textStyle(BOLD, ITALIC);
	textAlign(LEFT, CENTER);
	text('Put Mouse Here and Click!',30, 130);
	textSize(60);
	noStroke(0);
	textAlign(CENTER);

	if (mouseIsPressed) {
		image(cat, 0, 0, width, height);
		textSize(25);
	fill('orange');
	stroke('yellow');
	strokeWeight(5);
	textStyle(BOLD);
	textAlign (LEFT, CENTER);
	text('BONK!!',10, 110);
	} else {
		image(cat, 1000, 10, width, height);
	}

}