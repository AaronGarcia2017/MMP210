// global scope
var eyeheight = 145;
var a = 10;

function setup() {
	createCanvas(640, 360);
}

function draw() {
	background('#ffff4d')

	//Body spikes
	fill('#301E5F')
	stroke(a)
ellipse(280, 90, 90);
	ellipse(240, 100, 90);
	ellipse(220, 130, 90);
	ellipse(215, 165, 90);
	ellipse(240, 200, 90);
	ellipse(280, 210, 90);
	ellipse(315, 200, 90);
	ellipse(340, 170, 90);
	ellipse(340, 130, 90);
ellipse(315, 100, 90);




	//head
	fill('#e6ffff')
	stroke(a);
	ellipse(280, 150, 200,);

	

// right eye
	fill('#002233')
	ellipse(305, eyeheight, a, a);
	noStroke()

// left eye
	fill('#002233')
	ellipse(250, eyeheight, a, a);
	noStroke()

// mouth
arc(279, 180, 80, 50, 6.5, 3, PI + QUARTER_PI);

//mouth's eye
fill("white")
ellipse(276, 196, 18);

fill('#301E5F')
ellipse(276, 196, 14);



var small = 10;
var big = 15;

	//backround clouds (blue)
	fill('#0088cc')
	ellipse(100,100, 50, small);

	ellipse(120,108, 60, small);

	ellipse(220,330, 60, big);

	ellipse(30,300, 60, big);

	ellipse(400,30, 60, small);

	ellipse(60,5, 60, small);

	ellipse(420,38, 60, small);

	ellipse(370,58, 60, small); 

	ellipse(500,270, 60, small);

	ellipse(550,30, 60, small);

	ellipse(440,150, 90, big);

	ellipse(420,190, 60, small);

	ellipse(195,238, 60, small);

	ellipse(90,200, 60, small);

	ellipse(24,38, 60, small);

	ellipse(0,169, 60, small);

	ellipse(250,15, 60, small);

	ellipse(600,180, 60, big);

	ellipse(510,340, 70, big);

	ellipse(380,290, 60, small);

	//Background clouds (red)
	fill("red")

	ellipse(134,46, 60, small);

	ellipse(45,235, 70, 20);

	ellipse(480,333, 60, big);

	ellipse(280,300, 60, small);

	ellipse(540,118, 60, small);

	ellipse(460,195, 60, big);

	ellipse(130,158, 60, small);

	ellipse(20,87, 60, small);

}