//creating variblems

var car,wall;
var speed,weight;

//creating funtion setup
function setup() {
  //creating canvas
  createCanvas(800,400);

  //creating sprites
  car=createSprite(50,200,50,50);
  weight=createSprite(1500,200,60,height/2);

  //setting up random values
  speed=random(55,90)
  weight=random(400,1500)

  //Assign the velocityX property of the car sprite to the speed variable
  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  //to assign a color to the car when it collides.
    if(wall.x-car.x<(car.width+wall.width)/2){
      car.velocityX=0;
      var deformation=0.5*weight*speed*speed/22509;
      if(deformation>180){
        car.shapeColor=color(250,0,0);
      }
      if(deformation<180 && deformation>100){
        car.shapeColor
      }
    }




  drawSprites();
}