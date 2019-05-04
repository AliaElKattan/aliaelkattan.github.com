function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  noStroke();
  canvas.style('z-index',-1)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {
	console.log(mouseX,mouseY);
	fill(0,255-(mouseY/3),255-(mouseY/3),100);
	rect(mouseX,mouseY,(mouseY/10),(mouseY/10));
	fill(255,255,255);
}
