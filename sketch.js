const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(800,400);
  
  ground=new Ground(400,360);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}