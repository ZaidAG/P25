
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,boxBottom,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper=new Paper(100,670,100);
	 boxBottom=new Check20(605,550,600,70,true);
	 boxRight=new Check20(675,670,20,700,false);
	 boxLeft=new Check20(335,670,20,700,false);
	 ground=new Ground(500,700,1700,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  boxRight.display();
  boxLeft.display();
  boxBottom.display();
  ground.display();
  paper.display();
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1005,y:-2935});
	}
}


