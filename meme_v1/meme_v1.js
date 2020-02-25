function setup() {
	createCanvas(500,500);

background('gray');

	textSize(100);
	fill('white');
	stroke('black');
	strokeWeight(20);
	textStyle(ITALIC);
	textAlign(LEFT, CENTER);
	text('hello world',0, 250);

	textSize(20)
	strokeWeight(5);
	textStyle(NORMAL);
	textAlign(CENTER, TOP);

	var welcome = 'welcome to my website';
	var end = map(frameCount, 0, 200, 0, welcome.length);
	text( welcome.substring(0,end), 250, 350);

}