class Umbrella{
    constructor(x,y){
       var options={
        isStatic:true
       }
       this.body=Bodies.circle(x,y,120,options);
       this.r=120;

      this.image = loadImage('images/p1.png');
       World.add(world,this.body);
    }

    display(){
      var pos=this.body.position;
      imageMode(CENTER);
        image(this.image,pos.x,pos.y,300,300);
    }
}