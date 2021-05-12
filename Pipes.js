class Pipes {
    constructor(x,y,w,h){
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.bgroup = new Group();
}
display(){
    
    if(frameCount%60===0){
 var b= createSprite(this.x,this.y,this.width,this.height)
 b.velocityX=-4;
        this.bgroup.add(b);
 b.shapeColor="green";
 console.log(bird.a.x);
 console.log("piller",b.x)
 if(bird.a.x===b.x){
     score+=0.5;
     console.log("hello");
 }
bird.a.depth=b.depth;

if(bird.a.isTouching(this.bgroup) ){
    console.log("gameOver");
    gameState=0;
    dieSound.play();
  this.bgroup.setVelocityXEach(0);
}
      
     }
    }
    end(){

        this.bgroup.destroyEach();
    }
   }