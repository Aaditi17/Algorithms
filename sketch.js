var moving_rectangle, fixed_rectangle;
var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(800,400);

  moving_rectangle = createSprite(700, 200, 50, 50);
  moving_rectangle.shapeColor = "blue";
  moving_rectangle.debug = true;

  fixed_rectangle = createSprite(400,200,50,100);
  fixed_rectangle.shapeColor = "yellow";
  fixed_rectangle.debug = true;
  
  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor = "pink";

  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor = "grey";

  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor = "brown";

  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor = "white";
}

function draw() {
  background(0);
 // moving_rectangle.x = World.mouseX;
  //moving_rectangle.y = World.mouseY;

  moving_rectangle.velocityX = -6;
  fixed_rectangle.velocityX = 6;

  bounceOff(moving_rectangle, fixed_rectangle);

  //if(isTouching(moving_rectangle,obj1, obj2)){
    //moving_rectangle.shapeColor = "red";
    //obj1.shapeColor = "red";
    //obj2.shapeColor = "red";

  //}
  
  //else{
    //moving_rectangle.shapeColor = "green";
    //obj1.shapeColor = "green"; 
    //obj2.shapeColor = "green"; 
  //}


  drawSprites();
}

