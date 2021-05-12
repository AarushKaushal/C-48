class Bird{
    constructor(x,y,w,h){
  this.x=x;
  this.y=y;
  this.width=w;
  this.height=h;
  this.a= createSprite(this.x,this.y,this.w,this.h);
  this.a.addImage(birdImg);
  this.a.scale=0.5;
  this.a.debug=true;
  this.a.setCollider("circle",0,-15,10);
    }
display(){
if(keyDown("space") && this.a.y>200){
  this.a.velocityY=-10;
}

this.a.velocityY+=0.8;
 }
 end(){
   this.a.velocityY=0;
   this.a.visible=false;
 }
 revive(){
   this.a.visible=true;
 }
}