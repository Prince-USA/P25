
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground1;

function preload() {

}

function setup() {
    createCanvas(1600, 700);


    engine = Engine.create();
    world = engine.world;

    paper1 = new Paper(200, 40);
    dustbin1 = new Dustbin(1200, 650)
    //dustbin2 = new Dustbin(600, 60)
    ground1 = new Ground(400, 680, 2400, 20)

    Engine.run(engine);
    //alert('ho');
}


function draw() {
    rectMode(CENTER);
    background(0);
    paper1.display();
    dustbin1.display();
    ground1.display();
    //dustbin2.display();
    drawSprites();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
 
        Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 47, y: -47 });

    }
}
