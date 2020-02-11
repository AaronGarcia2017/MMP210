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
	ellipse(240, y, 20, 40);
	noStroke()

// mouth
	arc(250, 200, 120, 40, 0, HALF_PI * 1.2);
	arc(250, 240, 10, 80, 180, HALF_PI * 1.2);

var a = 10;
var b = 15;

	//backround circles
	fill('#0088cc')
	ellipse(100,100, 50, a);

	ellipse(120,108, 60, a);

	ellipse(220,330, 60, b);

	ellipse(30,300, 60, b);

	ellipse(400,30, 60, a);

	ellipse(60,5, 60, a);

	ellipse(420,38, 60, a);

	ellipse(370,58, 60, a); 

	ellipse(500,270, 60, a);

	ellipse(410,170, 60, a);

	ellipse(540,30, 60, a);

}