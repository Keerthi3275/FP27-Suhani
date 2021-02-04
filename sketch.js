const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,roofObject;
var rope1,rope2,rope3,rope4,rope5;
var engine,world;
function setup() 
{
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;
	roofObject=new Roof(200,275,1200,50);
	bobObject1=new Bob(200,400,100);
	bobObject2=new Bob(300,400,100);
	bobObject3=new Bob(400,400,100);
	bobObject4=new Bob(500,400,100);
	bobObject5=new Bob(600,400,100);

	rope1=new Rope(bobObject1.body,{x:200,y:300});
	rope2=new Rope(bobObject2.body,{x:300,y:300});
	rope3=new Rope(bobObject3.body,{x:400,y:300});
	rope4=new Rope(bobObject4.body,{x:500,y:300});
	rope5=new Rope(bobObject5.body,{x:600,y:300});
	//Engine.run(engine);
}
function draw()
{
  background("White");
  Engine.update(engine);
  roofObject.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
}
function keyPressed() 
{
	if (keyCode === UP_ARROW)
	 {
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-85});
	 }
}


