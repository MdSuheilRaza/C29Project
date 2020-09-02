class Ground{
    constructor(x,y,width,height){
        var ground_options={
            isStatic=true
        }

        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.ground=Bodies.rectangle(this.x, this.y, 850, 20);
        World.add(world,this.ground);
    }

    display(){
        rectMode(CENTER);
        rect(this.ground.position.x, this.ground.position.y, 850, 20);

    }
}