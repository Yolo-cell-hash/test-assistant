// class Button{
// 	constructor(){
// 		this.width = 150;
// 		this.height = 75;
// 		this.text = "More";
// 		this.pos = createVector((width/2)-(this.width/2), (height/2)-(this.height/2));
// 		this.targetPos = this.pos;
// 		this.hasArrivedAtTargetPos = true;
// 		this.distThreshold = 50;
// 	}
//
// 	show(){
// 		fill(247)
// 		// noStroke();
// 		rect(this.pos.x, this.pos.y, this.width, this.height);
// 		fill(0, 0, 0);
// 		textSize(30);
// 		text(this.text, ((this.width/2) - (textWidth(this.text)/2)) + this.pos.x,
// 			 ((this.height/2) + (textAscent(this.text)/3)) + this.pos.y );
// 	}
//
// 	isHovering(x, y){
// 		if(x >= this.pos.x && x <= this.pos.x - this.width){
// 			if(y >= this.pos.y && y <= this.pos.y - this.height){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
//
// 	isPressed(){
// 		if(this.isHovering(mouseX, mouseY) && mouseIsPressed){
// 			return true;
// 		}else{
// 			return false;
// 		}
// 	}
//
// 	isWithinThreshold(x, y){
// 		if(x >= this.pos.x - this.distThreshold && x <= this.pos.x + this.width + this.distThreshold){
// 			if(y >= this.pos.y - this.distThreshold && y <= this.pos.y + this.height + this.distThreshold){
// 				return true;
// 			}
// 		}
// 		return false;
// 	}
//
// 	moveToTargetPos(){
// 		var displacement = createVector(this.targetPos.x-this.pos.x, this.targetPos.y-this.pos.y);
// 		this.pos.x += displacement.x * 0.01 * deltaTime;
// 		this.pos.y += displacement.y * 0.01 * deltaTime;
//
// 		if(mag(displacement.x, displacement.y) <= 10){
// 			this.hasArrivedAtTargetPos = true;
// 		}
//
// 	}
//
// 	setTargetPosToRandomPos(){
// 		var tpBoundaryPadding = 20;
// 		var randX = random(tpBoundaryPadding, (width-this.width)-tpBoundaryPadding);
// 		var randY = random(tpBoundaryPadding, (height-this.height)-tpBoundaryPadding);
//
// 		if(this.isWithinThreshold(randX, randY)){
// 			this.setTargetPosToRandomPos()
// 		}else{
// 			this.targetPos = createVector(randX, randY);
// 		}
//
// 	}
//
// 	runFromMouse(){
// 		if(this.isWithinThreshold(mouseX, mouseY) && this.hasArrivedAtTargetPos){
// 			this.setTargetPosToRandomPos();
// 			this.hasArrivedAtTargetPos = false;
// 		}
//
// 		if(!this.hasArrivedAtTargetPos){
// 			this.moveToTargetPos();
// 		}
//
// 	}
//
// 	update(){
// 		this.runFromMouse();
// 	}
//
// }
//
// var button;
//
// function setup() {
//   	createCanvas(windowWidth, windowHeight);
// 	button = new Button();
// }
//
// function draw() {
// 	resizeCanvas(windowWidth, windowHeight);
//   	background(240, 235, 204);
//
//   	button.show();
// 	button.update();
// }
