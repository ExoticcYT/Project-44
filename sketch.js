var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(30);
  fill("white");
  text("Score: " + score, windowWidth/2 - 70, 50);

  if(score === 3){
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TREASURE UNLOCKED", windowWidth/2 - 200, windowHeight/2);
  }

  drawSprites()
}