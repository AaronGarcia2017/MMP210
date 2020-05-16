/*
  final project pitch (template)
  5.4.2020
*/

var currentSlide = 0;
var numberOfSlides = 3;

// next slide button
var nextButtonX = 850;
var nextButtonY = 680;
var nextButtonW = 100;
var nextButtonH = 33;

// prev slide button
var prevButtonX = 10;
var prevButtonY = nextButtonY;
var prevButtonW = nextButtonW + 30;
var prevButtonH = nextButtonH;

function setup() {
  createCanvas(960, 720);
}

function draw() {
  background(51);

  // text('slide ' + currentSlide, 100, 100);

  var title; // the title of the slide
  var description;
  

  // setup each slide
  if (currentSlide == 0) {
    title = "My final project";
    description = "for my project, i will create a 'click the button' game, where you can gain points by finding and clicking a button found randomly in the canvas.";
  } 
  else if (currentSlide == 1) {
    title = "User interaction";
    description = "the main focus is finding the button, so the mouse will be mostly prioritized over the keys. however, if for whatever reason you want to reset your points, you may do so with the X key.";
  } 
  else if (currentSlide == 2) {
    title = "Graphics";
    description = "the game will constantly change the canvas color after clicking the button, giving a sense of progress as you try to click the next one. if i am able, i can possibly try to change the colors of the background shapes as well, or even their position.";
  }

  // display title
  textSize(80);
  fill(255);
  noStroke();
  textAlign(LEFT, TOP);
  text(title, 20, 20);

  // display description
  textSize(40);
  text(description, 20, 200, width - 40);

  // slide button display
  // button background design
  fill('blue');
  stroke(255);
  strokeWeight(2);
  
  if (currentSlide < numberOfSlides - 1) {
    rect(nextButtonX, nextButtonY, nextButtonW, nextButtonH, 5); // next
  }

  if (currentSlide > 0) {
    rect(prevButtonX, prevButtonY, prevButtonW, prevButtonH, 5); // prev
  }
  
  
  // text design
  fill(255);
  textSize(25);
  noStroke();
  textAlign(CENTER, CENTER);

  if (currentSlide < numberOfSlides - 1) {
    text("Next", nextButtonX, nextButtonY, nextButtonW, nextButtonH);
  }
  
  if (currentSlide > 0) {
    text("Previous", prevButtonX, prevButtonY, prevButtonW, prevButtonH);
  }
  
}

function mousePressed() {
  // detecting mouse collision with the next button
  if (mouseX > nextButtonX && mouseX < nextButtonX + nextButtonW &&
    mouseY > nextButtonY && mouseY < nextButtonY + nextButtonH) {
    if (currentSlide < numberOfSlides - 1) {
      currentSlide++;
    }
    
  }

  // detect mouse collision with prev button
  if (mouseX > prevButtonX && mouseX < prevButtonX + prevButtonW &&
    mouseY > prevButtonY && mouseY < prevButtonY + prevButtonH) {
    if (currentSlide > 0) {
      currentSlide--;
    }
  }
}