function setup() {
  createCanvas(1600,400);
  createSprite(200, 400, 25, 600);
  createSprite(600, 400, 25, 600);
  createSprite(400, 400, 105, 400);
  createSprite(300, 400, 105, 300);
  createSprite(500, 400, 105, 300);
  createSprite(550, 400, 105, 500);
  createSprite(250, 400, 105, 500);


  
}

function draw() {
  background(255);  
  text(mouseX+", "+mouseY,300,50)
  triangle(600,153,500,153,550,80);
  triangle(200,153,300,153,250,80);
  triangle(350,200,450,200,400,80);

  drawSprites();
}