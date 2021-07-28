var sea, seaImage;
var ship;
var ship_sailing;

function preload(){
  createCanvas(400,400);

  ship_sailing = loadAnimation("ship-1.png","ship-2.png");
  seaImage = loadImage("sea.png");

  sea = createSprite(200,200,400,400);
  sea.addImage("sea", seaImage);
  sea.scale = 0.3;

  ship = createSprite(100,200,50,50);
  ship.addAnimation("sailing", ship_sailing);
  
  ship.scale = 0.2;

}

function draw() {
  background("blue");

  sea.velocityX = -2;

  if(sea.x < 0){
    sea.x = 400;
  }
  
  drawSprites();
}