const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var object,stand;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var polygon;
function setup() {
 
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;


 stand = new Ground(375,350,250,15)
 block1 = new Box(280,322,30,40)
 block2 = new Box(310,322,30,40)
 block3 = new Box(340,322,30,40)
 block4 = new Box(370,322,30,40)
 block5 = new Box(400,322,30,40)
 block6 = new Box(430,322,30,40)
 block7 = new Box(460,322,30,40)
 block8 = new Box(310,282,30,40)
 block9 = new Box(340,282,30,40)
 block10 = new Box(370,282,30,40)
 block11 = new Box(400,282,30,40)
 block12 = new Box(430,282,30,40)
 block13 = new Box(340,242,30,40)
 block14 = new Box(370,242,30,40)
 block15 = new Box(400,242,30,40)
 block16 = new Box(370,202,30,40)
 
 
}

function draw() {
  background(0);  
stand.display();
 block1.display();
 block2.display();
 block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

  drawSprites();
}
function polygon(){
  Matter.Bodies.polygon(50,200,5,20)
  
}