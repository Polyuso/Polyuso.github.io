function GamePlayer(){
	this.Position = createVector(0, 0, 0);
	
	this.update = function(){
		this.Position.add(0, 1, 0);
		if (!keyIsPressed)
			return -1;
		if (key == "w")
			this.Position.add(0, 0, -1);
		if (key == "s")
			this.Position.add(0, 0, 1);
		if (key == "a")
			this.Position.add(-1, 0, 0);
		if (key == "d")
			this.Position.add(1, 0, 0);
		
		
	}
	
	this.draw = function(){
		fill(0, 0, 0);
		translate(this.Position.x, this.Position.y, this.Position.z);
		box(10);
		noFill();
	}
	
}

var Player;
var Map;

function setup() {
	createCanvas(800, 600, WEBGL);
	background(20, 158, 204);
	frameRate(30);
	Player = new GamePlayer();
}

function draw() {
	clear();
	background(20, 158, 204);
	translate(-width/2, -height/2);
	
	
	Player.update();
	
	
	Player.draw();
}
