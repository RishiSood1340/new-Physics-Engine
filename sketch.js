const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,30,50,50);
  box2 = new Box(240,100,50,100);
  ground = new Ground(200,390,400,20);
}

function draw() {
  background("black");  
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  drawSprites();
}