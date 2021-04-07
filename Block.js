class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0,
            friction :0.5,
            density : 0.01,
            isStatic: false
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
       
          var angle = this.body.angle;
          var pos= this.body.position;
          push();
          translate(pos.x, pos.y);
          rotate(angle);
          strokeWeight(4);
          fill("red")
          rectMode(CENTER);
          rect(0,0,this.width, this.height);
          pop();
        
     }       
}