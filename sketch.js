
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	stone1= new Stone(100,100,100,100);
	hammer1= new Hammer(300,450,150,30);
	ground1= new Ground(400,710,800,10);
	ground2= new Ground(0,350,10,700);
	ground3= new Ground(800,350,10,700);
	sand1= new Sand(400,350,15);
	sand2= new Sand(420,350,15);
	sand3= new Sand(440,350,15);
	sand4= new Sand(460,350,15);
	sand5= new Sand(480,350,15);
	iron1= new Iron(500,350,75,50);
	rubber1= new Rubber(700,350,40);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

stone1.display();
hammer1.display(); 
ground1.display();
ground2.display();
ground3.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
rubber1.display();
iron1.display();
}



