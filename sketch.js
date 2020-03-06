const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sun;
var mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto;

function setup() {
  createCanvas(1000,1000);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}