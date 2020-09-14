var fixedRect, movingRect, ball;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  ball=createSprite(200,200,40,40);
  ball.velocityX=5;
  ball.shapeColor="orange";
}

function draw() {
  background(0,0,0);  

  bounceOff(movingRect, ball);
  bounceOff(movingRect, fixedRect);

  drawSprites();
}

for (var i=1; i<6; i=i+1){
  console.log("ello");
}