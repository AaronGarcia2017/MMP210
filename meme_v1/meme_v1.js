//global scope
	var vibecheck;
	function preload(){
		vibecheck = loadImage("vibecheck.jpg")

	}
function setup() {
	createCanvas(500,500);

background('gray');
	image(vibecheck, 0, 0);


	textSize(100);
	fill('white');
	stroke('black');
	strokeWeight(5);
	textStyle(BOLD , ITALIC);
	textAlign(LEFT, CENTER);
	text('THIS WAY',0, 50);
textSize(60);
textAlign(CENTER);

	text('FOR YOUR VIBE CHECK, SIR.', 0, 280, 500, 300)

	textSize(20)
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);


}