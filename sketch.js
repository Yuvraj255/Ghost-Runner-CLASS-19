var ghost,ghostImage
var tower,towerImage
var climber,climberIMage
var door,doorImage

var doorsGroup;
var climbersGroup;

function preload(){
  ghostImage = loadImage("ghost-standing.png");
  towerImage = loadImage("tower.png");
  climberImage = loadImage("climber.png");
  doorImage = loadImage("door.png");
}

function setup(){
  createCanvas(600,600);
  
  tower = createSprite(300,300,10,10);
  tower.addImage("tower",towerImage);
  tower.velocityY = 1;
  
  ghost = createSprite(300,300,10,10);
  ghost.addImage("ghost",ghostImage);
  ghost.scale = 0.4;
  
  doorsGroup = new Group();
  climbersGroup = new Group();

}

function draw(){
  
  if(keyDown("space")){
    ghost.velocityY = -5;
  } 
  ghost.velocityY = ghost.velocityY + 0.8;
  
  if(keyDown("right_arrow")){
    ghost.x += 3;
  }
  
  if(keyDown("left_Arrow")){
    ghost.x -= 3;
  }
  
  if(tower.y > 600){
    tower.y = 300;
  } 
  
  if(climbersGroup.isTouching(ghost)){
    ghost.velocityY = 0;
  }
  
  spawnDoors();
  
  drawSprites();
}

function spawnDoors(){
  if(frameCount % 250 === 0){
    door = createSprite(Math.round(random(120,240)),-50,10,10);
    door.addImage("door",doorImage);
    door.velocityY = 1;
    door.lifetime = 600;
    doorsGroup.add(door);
    
    climber = createSprite(door.x,10,10,10);
    climber.addImage("climber",climberImage);
    climber.velocityY  = 1;
    climber.lifetime = 600;
    climbersGroup.add(climber);    
  
    ghost.depth = door.depth + 1;
    
  }

}
