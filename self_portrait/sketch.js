function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('#ffff4d')
	//head
	fill('#e6ffff')
	stroke(10);
	ellipse(280, 150, 200,);

	var y = 145;

// right eye
	fill('#002233')
	ellipse(305, y, 10, 10);
	noStroke()

// left eye
	fill('#002233')
	ellipse(250, y, 10, 10);
	noStroke()

// mouth
arc(279, 180, 80, 50, 6.5, 3, PI + QUARTER_PI);

//mouth's eye
fill("white")
ellipse(276, 196, 18);

fill('#301E5F')
ellipse(276, 196, 14);



var a = 10;
var b = 15;

	//backround circles (blue)
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

	ellipse(550,30, 60, a);

	ellipse(440,150, 90, b);

	ellipse(420,190, 60, a);

	ellipse(195,238, 60, a);

	ellipse(90,200, 60, a);

	ellipse(24,38, 60, a);

	ellipse(0,169, 60, b);

	ellipse(250,15, 60, a);

	ellipse(600,180, 60, b);

	ellipse(510,340, 70, b);

	ellipse(380,290, 60, a);

	//Background circles (red)
	fill("red")

	ellipse(134,46, 60, a);

	ellipse(45,235, 70, 20);

	ellipse(480,333, 60, b);

	ellipse(280,300, 60, a);

	ellipse(540,118, 60, a);

	ellipse(460,195, 60, b);

	ellipse(130,158, 60, a);

	ellipse(20,87, 60, a);

}