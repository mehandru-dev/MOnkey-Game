var bgImg, bg, bg2 , bg3;
var stone5 , stone_image , stone1 , stone2 , stone3 , stone4;
var banana , banana_img;
var i_ground;
var monkey, monkey_image;
var  x ;
var score = 0;

function preload() {
  bgImg = loadImage("jungle.jpg");

  monkey_image = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
 banana_img = loadImage("banana.png");
  
  stone_image = loadImage("stone.png");
  
   soundFormats('mp3');

}

function setup() {
  createCanvas(1000, 720);

  BananaGroup = new Group();

  
  bg = createSprite(500, 300, 10, 10);
  bg.addImage("jungle.img", bgImg);
  bg.velocityX = -5;

  bg2 = createSprite(1500, 300, 10, 10);
  bg2.addImage("jungle.img", bgImg);
  bg2.velocityX = -5;

  i_ground = createSprite(500,570,1000,10);
  i_ground.visible=false;
  
  
  monkey = createSprite(150,500,10,10);
  monkey.addAnimation("monkey",monkey_image);
  monkey.scale=0.2;

  banana = createSprite(800,0,50,50);
  banana.addImage("Image",banana_img);
  banana.scale=0.1;
  banana.velocityX=-5;
  banana.velocityY=5;
  
  stone1 = createSprite(1000,560,10,10);
  stone1.addImage("Image",stone_image);
  stone1.scale=0.15;
  stone1.velocityX=-7;    
  

  
}

function draw() {
  background(200);

   
  
  if(bg.x<-500){
     bg.x=1500;
     
     }
  
 if(bg2.x<-500){
    bg2.x=1500;
     
     }
  
  monkey.collide(i_ground);
  banana.collide(i_ground);
  stone1 .collide(i_ground);

  
  monkey.velocityY = monkey.velocityY + 0.7;
  banana.velocityY = banana.velocityY + 0.6;
  BananaGroup.add(banana);

  if(monkey.y>=500){
    
          if(keyDown("space")) {
    monkey.velocityY = -20;
  }
     }
 if(banana.x<0){
    banana.x=1700;
    
    }
 
  if(monkey.isTouching(banana)){
     score=score+1;
     banana.x=1000;
     banana.y=0;
      monkey.scale=monkey.scale+0.005;
     }
  if(monkey.isTouching(stone1)){
     score=score-1;
     stone1.x=1000;
     
     }
  if(stone1.x<0){
    stone1.x=1700;
    
    }
  
if (monkey.scale===1){
  text("You Win",300,715);
  
  
}

  fill("black");
  textSize(38);
  stroke("black");
  text("Score: "+ score,800,715);

  drawSprites();
 
}

