//creating variblems

var car,wall;
var speed,weight;

//creating funtion setup
function setup() {
  //creating canvas
  createCanvas(800,400);

  //creating sprites
  //creating car sprite
  car=createSprite(50,200,50,50);
  car.shapeColor="pink";
   
   //creating wall sprite
   wall=createSprite(1500,200,60,height/2);
   wall.shapeColor="white";

  //setting up random values
  speed=random(55,90)
  weight=random(400,1500)

 
}

function draw() {
  background("black");  
  //to assign a color to the car when it collides.
  car.velocityX=speed;

  background("black");

  if(wall.x-car.x<(wall.width+car.width)/2){

    car.velocityX=0;

    var deformation=0.5*speed*weight*speed/22500

    if(deformation>180){

      car.shapeColor=color(255,0,0);

  }
  if(180>deformation&&deformation>100){

    car.shapeColor=color(230,230,0);

  }
  if(deformation<100){

    car.shapeColor=color(0,255,0);


  if(car.x-wall.x<wall.width/2+car.width/2
    && wall.x-car.x<wall.width/2+car.width/2
    && car.y-wall.y<wall.height/2+car.height/2
    && wall.y-car.y<wall.height/2+car.height/2){
   
  }
  else{
    car.shapeColor="pink";
    wall.shapeColor="white";
  }
  }
}




  drawSprites();
}