var spaceship, spaceshipimg, bgimg
function preload() {
 spaceshipimg=loadImage("spacship.png")
 bgimg=loadImage("space_background.jpg")
}
function setup() {
  createCanvas(500,500);
  spaceship= createSprite(250,400);
  spaceship.addImage(spaceshipimg);
  spaceship.scale=0.34;
}

function draw() {
  background(55)
  image (bgimg, 0 , 0,500 ,500) 
  drawSprites();
}

