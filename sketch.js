
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage= loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
ground = createSprite(400,350,900,10);

  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1


}


function draw() {
    background("lightBlue");

  monkey.collide(ground);
  monkey.velocityY = 10;
  if(keyDown("space") && monkey.y > 120 ){
    monkey.velocityY = -12   
  }
  spawnFood();
   spawnRock();
  drawSprites();
}
function spawnFood(){
if(frameCount%80 === 0){
  banana = createSprite(450,random(120,200));
  banana.addImage(bananaImage)
  banana.velocityX = -8
  banana.scale = 0.1
  banana.lifetime = 120
}
}
function spawnRock(){
  if(frameCount%300=== 0){
  obstacle = createSprite(450,315);
  obstacle.addImage(obstacleImage)
  obstacle.velocityX = -8
  obstacle.scale = 0.2
  obstacle.lifetime = 120
}
}





