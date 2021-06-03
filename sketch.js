const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time;
var bg;
var hour;
var snowfall;
var snows = [];
var rand;

var maxSnows = 25;

function preload(){
  backgroundImg = loadImg ("snow1.jpg");
}

function setup() {
  var canvas = createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  //creating snow
  if(frameCount % 500 === 0){

    for(var i = 0; i < maxSnows; i++){
      snows.push(new Snowfall(random(0, 800), random(0,400)));
    }
  }
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);

  //displaying snows
  for(var i =0; i < maxSnows; i++){
    snows[i].display();
    snows[i].updateY();
  }
}