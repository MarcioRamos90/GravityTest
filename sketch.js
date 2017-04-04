var canvas;
var b1 = [];
var count=0

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
    for(var i = 0; i < count; i++){
      b1[i] = new Monster(mouseX,mouseY);
    }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function mousePressed(){
  b1[count] = new Monster(mouseX,mouseY);
  count ++;
}
function draw() {
    background(0,200,100);
    for (var i = 0; i < b1.length; i++) {
      b1[i].display();
      b1[i].gravidade();
      b1[i].quiqui();
    }

}
