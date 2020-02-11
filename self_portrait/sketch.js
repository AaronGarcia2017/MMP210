function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('#ffff4d')
	//head
	fill('#e6ffff')
	stroke(10);
	ellipse(280, 150, 200,);

	var y = 119;

// right eye
	fill('#002233')
	ellipse(320, y, 20, 40);
	noStroke()

// left eye
	fill('#002233')
	ellipse(230, y, 20, 40);
	noStroke()

// mouth
	arc(250, 200, 120, 40, 0, HALF_PI * 1.2);
	arc(250, 240, 10, 80, 180, HALF_PI * 1.2);


	//backround circles
	fill('#0088cc')
	ellipse(100,100, 50, 10);

	ellipse(120,108, 60, 10);

	ellipse(220,330, 60, 15);

	ellipse(30,300, 60, 15);

	ellipse(400,30, 60, 10);

	ellipse(60,5, 60, 10);

	ellipse(420,38, 60, 10);

	ellipse(370,58, 60, 10) 

	ellipse(400,30, 60, 10)

	ellipse(400,30, 60, 10)

	ellipse(400,30, 60, 10)

}