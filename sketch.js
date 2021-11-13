var bg,bgImg;
var player, shooterImg, shooter_shooting, zombieimg, zombieimg1, bulletimg
var zombies
var zombieGroup, bulletsGroup
var bullets


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieimg = loadImage("assets/zombie.png")
  zombieimg1 = loadImage("assets/zombie1.png")
  bulletimg = loadImage("assets/bullet.png")
  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)

   zombieGroup = new Group()
   bulletsGroup = new Group()


}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
  bullet = createSprite(player.x, player.y - 20,10,10)
  bullet.velocityX = 5
  bullet.addImage(bulletimg)
  bullet.scale = 0.15
  bulletsGroup.add(bullet)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}

spawnZombies()

drawSprites();

}
function spawnZombies() {
  if(frameCount%100 == 0) {
  zombies = createSprite(width,random(100,600),10,10)
  zombies.velocityX = -5;
  zombies.lifetime = 300
  rand = Math.round(random(1,2))
  if(rand === 1){
    zombies.addImage(zombieimg)
    zombies.scale = 0.15
  }
  else{
    zombies.addImage(zombieimg1)
    zombies.scale = 0.6
  }
  zombieGroup.add(zombies)

  }
}
