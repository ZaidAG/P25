class Check20{
    constructor(x, y, width, height,isBase) {
       var options = {
        isStatic:true,
        resititution:0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.isBase=isBase;
    this.image=loadImage("sprites/dustbingreen.png")

  
    World.add(world,this.body);
  
    }
    display(){
        var pos=this.body.position;
        if(this.isBase){
          push();
          translate(pos.x,pos.y);
          imageMode(CENTER);
          image(this.image,0,-90, this.width, this.height*5);
          pop();
        }else{
          push();
          translate(pos.x,pos.y);
          rectMode(CENTER);
          noStroke();
          fill(255);
          rect(0,0, this.width, this.height);
          pop();
        }
    }
    }