function Monster(x,y){
    this.x = x;
    this.y = y;
    this.r = 15;
    this.movX = 10;
    this.col = color(255,255,0);
  
    this.posIniY = y;
    this.display = function(){
        noStroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
  
    this.changeDirection = function(){
        if(this.y > windowHeight - this.r){
                if(mouseIsPressed && this.y > 30 ){
                    this.y -= 10;
                    if(mouseX > this.x + 12){
                        this.x += this.movX;
                    }else if(mouseX < this.x - 12){
                        this.x -= this.movX;
                    }//else{this.x = mouseX}
                }
        this.y +=50;
        }
    }
  
    this.gravidade = function(){
        if (this.y < height - this.r ){
        this.y += 6;
        }
    }
}