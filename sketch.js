var fixedRect, movingRect
var fo1, fo2, fo3, fo4


function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.debug = true;
  movingRect.debug = true;

  fo1 = createSprite(100, 100, 40, 40);
  fo1.shapeColor = "blue";
  fo1.velocityX = 2;
  fo2 = createSprite(200, 50, 40, 40);
  fo2.shapeColor = "white";
  fo3 = createSprite(300, 50, 40, 40);
  fo3.shapeColor = "purple";
  fo4 = createSprite(400, 100, 40, 40);
  fo4.shapeColor = "yellow";
  fo4.velocityX = -2;
}

function draw() {
  background(0);
  movingRect.x = mouseX
  movingRect.y = mouseY

  if (isTouching(fo3, movingRect)) {
    fo3.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else {
    fo3.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  bounceOff(fo1,fo4);
  drawSprites();
}

