const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, arrow, clown1,clown2,clown3,clown4,clown5;
var apple1, apple2, log1, log2, log3, log4, backgroundImg;

var slingshot, gameState = "onSling";
var selectSound, flySound;
var score = 15;

function preload(){
    backgroundImg = loadImage("./sprites/circus-back.jpg");
    selectSound = loadSound("./sounds/release.mp3");
    flySound = loadSound("./sounds/fly.mp3");
    
}

function setup(){
    canvas = createCanvas(1550,600);
    engine = Engine.create();
    world = engine.world;
    angleMode(RADIANS);

    ground1 = new Ground(width/2,height-10,width,20);

    
    clown1 = new Clown(600, 150,80,80);
    ground2 = new Ground(600, 200,200,20);
    apple1 = new Apple(600, 120);

    clown2 = new Clown(850, 430,80,80);
    ground3= new Ground(850, 480,200,20);
    apple2 = new Apple(850, 400);

    clown3 = new Clown(1300,250,80,80);
    ground4= new Ground(1300,300,200,20);
    apple3 = new Apple(1300, 220);

    clown4 = new Clown(1300,470,80,80);
    ground5= new Ground(1300,520,200,20);
    apple4 = new Apple(1300, 440);


    arrow = new Arrow(125,480);
    slingshot = new Slingshot(arrow.body, {x:125,y:480})
}

function draw(){
    background(backgroundImg);
    //display score
    textSize(25);

    fill("white");
    text("Arrows Left: " + score, width/2, 40);

    Engine.update(engine);

    ground1.display();
    ground2.display();
    ground5.display();

    clown1.display();
    clown2.display();
    clown3.display();
    apple1.display();

    apple3.display();

    clown4.display();
    apple4.display();
    apple2.display();

    ground4.display();
    ground3.display();
    arrow.display();
    slingshot.display();


}

function mouseDragged(){
    if(gameState!="launched") {

        Matter.Body.setPosition(arrow.body, {x:mouseX, y:mouseY});
        selectSound.play();
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
    if(score!=0){
        score=score-1;
    }

    flySound.play();
}

function keyPressed(){
    if(keyCode == 32 && score>0  ){
        slingshot.attach(arrow.body);
        gameState = "onSling";
        arrow.trajectory = [];
        Matter.Body.setPosition(arrow.body, {x:125, y:480})
    }
}

