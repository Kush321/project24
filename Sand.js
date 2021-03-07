class Sand{
    constructor(x,y,radius){
        var options={
            'density':1.0,
            'friction':5.0,
            'restitution':1.3,
        //    isStatic:false
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x,pos.y,this.radius);
    }
}