
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg, dustbin;

function preload()
{
  dustbinImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 600, 20);
    ground = new Ground(400, 685, 800, 30);

    dustbin = createSprite(610,600, 100,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.5;
  
    leftSide = new Dustbin(550, 600, 10, 150);
    bottom = new Dustbin(610, 675, 100, 10);
    rightSide = new Dustbin(670, 600, 10, 150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");

  ground.display();
  
  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();
  paper.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position, {x:65, y: -65})
	}
  }


