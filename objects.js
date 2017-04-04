function Monster(x,y){
    this.x = x;
    this.y = y;
    this.r = 15;
    this.movX = 10;
    this.col = color(255,255,0);

    this.gravi = 1;
    this.posIniY = y;
    this.aceleracao = 7;
    this.aceleraQuique = 7;
    this.absorcao = 0;
    this.distTotal=0;
    this.distSoma=0;
    this.primeiraDist=0;
    this.para=0;


    this.display = function(){
        noStroke(255);
        fill(this.col);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
    this.gravidade = function(){
        if (this.y < height - this.r ){
          this.y += this.aceleracao ;
          this.distSoma += this.aceleracao;
        }
    }
    this.quiqui = function(){
      if( this.para >= 1 ){
        this.aceleraQuique += -0.2;
        this.y -= this.aceleraQuique;
      }
      if (this.y >= height- this.r && this.y < height + this.r){
        this.para++;
        if(this.para == 1){
          this.distTotal = this.distSoma;
        }
        this.absorcao = parseInt(this.distTotal* 0.03) ;
        this.absorcao -=this.para;
        this.aceleraQuique = this.absorcao ;

        //print(this.para + " " + this.distTotal + " " + this.absorcao);
        this.aceleracao =0;
        }
    }
    this.bolaPArada = function(){
      if(this.absorcao == 0){
        return true
      }else{
        return false
      }
    }
}
