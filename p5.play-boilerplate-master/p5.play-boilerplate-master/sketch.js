var police;
var thief;
var dog;
var ground;
var dog1,police,thief1;

function preload(){
  police1 = loadAnimation("police.png");
  dog1 = loadAnimation("dog.png");
  thief1 = loadAnimation("thief.png");

}

function setup() {
  createCanvas(800,400);

  
  
  dog = createSprite(100,50,30,30);
  dog.addAnimation("dog",dog1);
  dog.scale=0.5;


  thief = createSprite(300,50,30,30);
  thief.addAnimation("thief",thief1);
  thief.scale=0.5;
  
  police = createSprite(150,50,30,30);
  police.addAnimation("police",police1);
  police.scale=0.5;

  ground = createSprite(400,200,800,20);


}
function draw() {
  background(255,255,255);  
  drawSprites();
}