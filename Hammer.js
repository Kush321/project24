class Hammer{
    constructor(x,y,width,height){
        var options={
            'density':1.0,
            'friction':1.0,
            'restitution':0.8
            //isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("orange");
        pos.x=mouseX;
        pos.y=mouseY;
        rect(pos.x,pos.y,this.width,this.height);

    }
}