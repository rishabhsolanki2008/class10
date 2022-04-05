var trex, trex_running, edges;
var groundImage,ground
var invisibleGround
var cloud,cloudImg

function preload()
{
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
  cloudImg = loadImage("cloud.png")
}

function setup()
{
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();

  //create ground
  ground = createSprite(200,180,400,5);
  ground.addImage(groundImage)
  ground.x = ground.width/2
  ground.velocity.x = -5

  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50

  //Creating invisiblle ground
  invisibleGround = createSprite(50,190,100,5)
  invisibleGround.visible =false
  
}




function draw()
{
  //set background color 
  background("white");

  //To reset the background
  if(ground.x < 0 ){
    ground.x = ground.width/2
  }

  console.log(frameCount);
  
  
  //logging the y position of the trex
 // console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y >= 120){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisibleGround)


  spwanClouds() 
  drawSprites();
}

function spwanClouds()  {
  if(frameCount%60 === 0) {
    cloud = createSprite(600,50,20,10);
    cloud.addImage(cloudImg)
    cloud.velocity.x = -3;
    cloud.scale = 0.4;
    cloud.y = Math.round(random(10,60))
  }



}