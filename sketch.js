
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var ball;
var top_wall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
 var ball_options ={
   restitution: 0.95
 }
  

  ground =new Ground(200,390,400,20);
 ball = Bodies.circle(100,200,20,ball_options);
 top_wall = new Ground(50,200,30,20);
  top_wall1 = new Ground(150,200,30,20);
  top_wall2 = new Ground(250,200,30,20);
  top_wall3 = new Ground(350,200,30,20);
  World.add(world,ball);

  
Button1 = createImg("up.png");
Button1.position(20,20); 
Button1.size(50,50);
Button1.mouseClicked(edgeForce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  top_wall1.show();
  top_wall2.show();
  top_wall3.show();
  Engine.update(engine);
}

function edgeForce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
