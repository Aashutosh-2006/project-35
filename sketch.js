//Create variables here
var  dog, happyDog, database, foodS, foodStock;
var d1,d2;


function preload()
{
  //load images here
  d1=loadImage("dogImg.png");
  d2=loadImage("dogImg1.png");
}

function setup() {
  
  database=firebase.database();
   console.log(database);
  
  createCanvas(500, 500);
  
  dog=createSprite(250,270,50,50);
  dog.addImage(d1);
  dog.scale=0.25;

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(d2);
}

  drawSprites();
  //add styles here
text("Notes:Press UP_ARROW Key To Feed Drago Milk!");
fill("blue");
stroke("Green");
}

function writeStock(x){

  if(x<=0){
x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

function readStock(data){
  foodS=data.val();
}
