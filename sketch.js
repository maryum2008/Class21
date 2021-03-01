var fixedRect, movingRect
function setup() {
  createCanvas(1200,800);
 fixedRect=createSprite(200, 200, 50, 80);
 movingRect=createSprite(400,200,80,30)
 fixedRect.shapeColor="green"
 movingRect.shapeColor="green"
 fixedRect.debug=true
 movingRect.debug=true
 movingRect.velocityY = -5;
 fixedRect.velocityY = +5;
 gob1=createSprite(100,100,50,50)
 gob1.shapeColor="green"
 gob2=createSprite(200,100,50,50)
 gob2.shapeColor="green"
 gob3=createSprite(300,100,50,50)
 gob3.shapeColor="green"
 gob4=createSprite(400,100,50,50)
 gob4.shapeColor="green"

}

function draw() {
  background(0);  
  movingRect.x=World.mouseX
  movingRect.y=World.mouseY

if( isTouching(movingRect,gob4) ){
  gob4.shapeColor="red"
  movingRect.shapeColor="red"  
}
else{
  gob4.shapeColor="green"
movingRect.shapeColor="green"
}
bounceOff(movingRect,fixedRect)
console.log(movingRect.x-fixedRect.x)
  drawSprites();
}
