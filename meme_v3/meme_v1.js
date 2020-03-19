//global scope
var x = 100;
var y = 100;
var speed = 5;
var c;
var dvd;
function preload() {
	dvd = loadImage("dvd_logo.png")
}
function setup (){ 
	createCanvas(400,400);	
	c = 'blue';
}

function draw() {
	background(0);

	if (frameCount % 30 == 0) {
		c = random(['Khaki', 'magenta', 'yellow', 'purple']);
	}
	  
	tint(c);
	frameRate(60);

//Dvd logo
	image(dvd, x, y);
	x += speed;
	if (x > width || x < 1) {
		speed *= -1;
y += speed;
	if (y > height || y < 0) {
		speed *= -5;
	}

	}
}