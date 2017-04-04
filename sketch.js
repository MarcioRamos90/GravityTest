var canvas;
var bolas = [];
var count=0

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function mousePressed(){
  bolas[count] = new Bola(mouseX,mouseY);
  count ++;
}
function draw() {
    background(0,200,100);
    for (var i = 0; i < bolas.length; i++) {
      bolas[i].display();
      bolas[i].gravidade();
      bolas[i].quiqui();
      if(bolas[i].bolaPArada()){
        bolas.splice(i,1);
        count--;
      }
    }
}
