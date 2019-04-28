function setup() {
  createCanvas(windowWidth,windowHeight);
  stroke(0);
  strokeWeight(1);
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function draw() {

	fill(255,0,255);
	ellipse(mouseX,mouseY,5,5);

}