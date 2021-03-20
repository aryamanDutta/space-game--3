var shuttle,shuttleImage;
var block,blockImage;
var meteor,meteorImage;
var star,starImage;
var block;
var score;



function preload(){
blockImage=loadImage("images/back.jpg")
shuttleImage=loadImage("images/space_shuttle.png")
meteorImage=loadImage("images/space_meteor.png")
starImage=loadImage("images/star.png")
}

function setup(){
 createCanvas(1280,608);
 block=createSprite(400,400,1280,608);
 block.addImage(blockImage);
 block.scale=2;
 //block.x = block.width/2;
 block.velocityX = -4;
 
 
 
shuttle=createSprite(600,600);
shuttle.addImage(shuttleImage);
shuttle.scale=0.15;


star=createSprite(400,400);
star.addImage(starImage);
star.scale=0.02;


meteor=createSprite(600,600);
meteor.addImage(meteorImage);
meteor.scale=0.1;

    score=0;

}

function draw(){
    background("white");

    
    if (block.x < 500)
    {
     block.x = block.width/2;
    }


shuttle.x=mouseX;
shuttle.y=mouseY



if(shuttle.isTouching(star)){
    star.destroy();
    score=score+2;

    
}

if(shuttle.isTouching(meteor)){
    meteor.destroy();
    score=score-1;
}




    drawSprites(); 
    stroke("white");
    textSize(20);
    text("Score = "+score,350,50);

}
