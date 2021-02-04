class Rope{
    constructor(body1, pointB){
        var options = {
            bodyA: body1,
            pointB: pointB,
            stiffness:0.04,
            length:300    
        }
        this.rope = Constraint.create(options);
        this.pointB=pointB
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(3);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
    }
    
}