//global scope
	var cat;
	function preload(){
		cat = loadImage("cat.jpg")



	}
function setup() {
	createCanvas(300,190);

background('gray');
	image(cat, 0, 0);

	ellipse(20, 150, 30)


	textSize(10);
	fill('white');
	textStyle(BOLD , ITALIC);
	textAlign(LEFT, CENTER);
	text('Put Mouse Here!',30, 130);
textSize(60);
textAlign(CENTER);


}