var car,carImg
var roadimg,road
var oil,oilimg,oilGroup
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  carImg=loadImage('car111.png')
  roadimg=loadImage('road.png')
  oilimg=loadImage('oil.png')



}


function setup() {
  createCanvas(400,400);
  
  road=createSprite(200,200)
  road.addImage("road",roadimg)
  road.scale=0.9
  oilGroup = createGroup();
  
  
  
  
  car = createSprite(250,300,15,15);
  car.addImage("car",carImg)
  car.scale=0.1
}

function draw() {
  oilspill()
  road.velocityY = -3
  camera.position.x=car.position.x
  

    if (road.y < 0){
      road.y = road.height/2;
    }
  
  if(gameState===END){
    car.velocityX=0
    car.velocityY=0
    road.velocityY=0
    oilGroup.velocityY=0
    car.destroy()
    road.destroy()
    oilGroup.destroyEach()
    textSize(50)
    text('gameOver')
    
  }
  if(oilGroup.isTouching(car)){
    gameState = END
    
  }
 
  
   
  
  if(keyDown("right")){
    car.velocityX=4
  }
  if(keyDown("left")){
      car.velocityX=-4
  }
  if(keyDown("space")){
      car.velocityX=0
  }
  
  drawSprites()
}

function oilspill(){
  if (frameCount % 60 === 0) {
    oil = createSprite(400,100,40,10);
    oil.x = Math.round(random(400,150));
    oil.addImage(oilimg);
    oil.scale = 0.1;
    oil.velocityY = 3;
    oilGroup.add(oil)
}}





