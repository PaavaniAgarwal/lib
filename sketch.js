var rect1,rect2,rect3,rect4,rect5;
function setup() {
  createCanvas(800,400);

   rect1=createSprite(500, 200, 50, 50);
   rect1.debug=true;
   for(i=100;i<600;i=i+100){
    rect2=createSprite(i, 200, 50, 50);
    rect2.debug=true;
   }
   rect3=createSprite(500, 100, 50, 50);
   rect3.debug=true;
   rect4=createSprite(120, 100, 50, 50);

   rect5=createSprite(600, 100, 50, 50);
}

function draw() {
  background("blue"); 
  rect1.y=World.mouseY;
  rect1.x=World.mouseX;  
  console.log(rect1.x-rect2.x);



 if(colours(rect1,rect2)){
  rect1.shapeColor="red";
  rect2.shapeColor="red";
 }
  else{
   
    rect2.shapeColor="yellow";
  }
  if(colours(rect1,rect3)){
    rect1.shapeColor="red";
    rect3.shapeColor="red";
   }
    else{
     
      rect3.shapeColor="yellow";
    }

  colours(rect1,rect4); 
  colours(rect1,rect5);
 drawSprites();
}
