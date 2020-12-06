var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var backgroundIMG, zombie1IMG, zombie2IMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	backgroundIMG = loadImage("background.jpg");
	zombie1IMG = loadImage("zombie1.jpg");
    zombie2IMG = loadImage("zombie2.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	background1 = createSprite(400,350,10,10);
	background1.addImage(backgroundIMG);
	background1.scale = 2.0;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,20);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.7;

	groundSprite=createSprite(width/2, height-15, width,10);
	groundSprite.shapeColor=('red');
   
	zombie1= createSprite(55,605,20,20);
	zombie1.addImage(zombie1IMG);
	zombie1.scale = 0.3;

	zombie2= createSprite(760,599,20,20);
	zombie2.addImage(zombie2IMG);
	zombie2.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 675, width, 20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  drawSprites();
  textFont('Algerian');
  textSize(65);
  fill('yellow');
  text('!! ZOMBIE INVASION !!', 70, 350)
}
function keyPressed() {
 if (keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false);
  }
}



