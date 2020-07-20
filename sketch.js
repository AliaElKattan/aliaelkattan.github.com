var shuffle = false;
var pr = 0, pg = 255, pb = 120;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  noStroke();
  canvas.style('z-index',-1)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function draw() {

	if (shuffle === true) {
		console.log(shuffle);
		pr = random(150,255);
  		pg = random(150,255);
  		pb = random(150,255);
  		shuffle = false;
	}


	fill(pr,pg-(mouseY/3),pb-(mouseY/3),120);

	// fill(0,255-(mouseY/3),255-(mouseY/3),120);
	rect(mouseX,mouseY,(mouseY/10),(mouseY/10));

	// fill(255,255,255);
}


function mouseClicked() {
  // clear();
  var br = random(150,255);
  var bg = random(150,255);
  var bb = random(150,255);
  background(br,bg,bb);
  shuffle = true;
}

// function draw() {
//   if (mouseIsPressed) {
//     line(pmouseX, pmouseY, mouseX, mouseY);
//   }
//   // var vol = mic.getLevel();
//   // ellipse(width / 2, height / 2, vol * width);
// }