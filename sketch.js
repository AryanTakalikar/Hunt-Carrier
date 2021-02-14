const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var boy, boyimg;
var stones;


function preload(){
	
	boyimg=loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 650);

	engine = Engine.create();
	world = engine.world;

	dground=new Ground();
	stones=new Stone(100,460,23);
	

	attach=new Throw(stones.body,{x:100,y:465});

	
	boy=createSprite(160,550);
	boy.addImage(boyimg);
	boy.scale=0.125;

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  fill("black");
  textSize(18);
  


  drawSprites();

  stones.display();
  dground.display();
 

}

function mouseDragged(){
	Matter.Body.setPosition(stones.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstones,lmango){

	if(lstones.body.position.x- lmango.body.position.x <lmango.diametre + lstones.diametre
		&& lmango.body.position.x - lstones.body.position.x  < lmango.diametre + lstones.diametre
		&&lstones.body.position.y -lmango.body.position.y < lmango.diametre + lstones.diametre
		&& lmango.body.position.y - lstones.body.position.y < lmango.diametre + lstones.diametre){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stones.body,{x:100,y:465});
		attach.Launch(stones.body);
	}
}