const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bobObject1, bobObject2, bobObject3, bobObject4,bobObject5;
var chain1, chain2, chain3, chain5, chain4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof1 = new Roof(width/2, height/2-200, 200, 20);

	bobObject1 = new Bob(width/2-80, height/2, 40);
	bobObject2 = new Bob(width/2-40, height/2, 40);
	bobObject3 = new Bob(width/2, height/2, 40);
	bobObject4 = new Bob(width/2+40, height/2, 40);
	bobObject5 = new Bob(width/2+80, height/2, 40);

	chain1 = new Rope(bobObject1.body, roof1.body, -80, 0);
	chain2 = new Rope(bobObject2.body, roof1.body, -40, 0);
	chain3 = new Rope(bobObject3.body, roof1.body, 0, 0);
	chain4 = new Rope(bobObject4.body, roof1.body, 40, 0);
	chain5 = new Rope(bobObject5.body, roof1.body, 80, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  
  drawSprites();
  roof1.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}

function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -80, y: -80});
	}
}



