let canvas;

const shapes = [];

let posX, posY;

let shape;

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}

function setup() {
	canvas = createCanvas(windowWidth,windowHeight);
	canvas.position(0,0);
	canvas.style('z-index',-1);

	posX = random(width);
	posY = random(height);

}

function draw(){
	background(50);

	fill(20);

	if(shapes.length <50) {
		for (let i = 0; i < 50; i++) {
    	let c = new Shape();
    	shapes.push(c);
  }
	}


   for(let i =0; i< shapes.length; i++) {
    shapes[i].diam = 700;
    shapes[i].update();
    shapes[i].show(1);
  }

 	fill(20);
	rect(windowWidth*.01,windowHeight*.01,width-windowWidth*.02,height-windowHeight*.02, 15);
}

class Shape {
  
  constructor() {
    
    
    //location
    this.x = random(windowWidth*(1/4),windowWidth*(3/4));
    this.y = random(windowHeight*(1/4),windowHeight*(3/4));
    //this.x2 = this.x + 100;
    
    //movement vectors
    this.vx = random(-1,1);
    this.vy = random(-1,1);
    
    // colors
    this.r = random(0,255);
    this.g = random(0,255);
    this.b = random(0,255)
    
    // size
    this.diam = random(10,50);
    
    let temp = 0;
    
  }
  
  update() {
    
    this.x += this.vx;
    this.y += this.vy;
    
    if(this.vx > 0) {
      if (this.x >= (windowWidth)) {
        this.vx = this.vx * -1;
      }
    }
    
    if(this.vx < 0) {
      if(this.x <= 0) {
        this.vx = this.vx * -1;
      }
    }
    
     if(this.vy > 0) {
      if (this.y >= (windowHeight)) {
        this.vy = this.vy * -1;
      }
    }
    
    if(this.vy < 0) {
      if(this.y <= 0) {
        this.vy = this.vy * -1;

      }
    }
    

  }
  
  show() {
    noStroke();
    fill(this.r, this.g, this.b);
    
    ellipse(this.x, this.y, this.diam);
  }
}

