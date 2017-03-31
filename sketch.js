var canvas;
var x;
var b1;

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    b1 = new Monster(250,200);
    

}
function mousePressed(){
    
}


function windowResized(){
    //print('risized')
    resizeCanvas(windowWidth,windowHeight);
}

function draw() {
    background(0,200,100);
    
    x++;
    var t = map(mouseX,0,100,0,windowHeight);
    fill(0,230,100);
    ellipse(mouseX,mouseY,40);
    
    b1.display();
    b1.gravidade();
    b1.changeDirection();
}