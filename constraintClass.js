class ConstraintClass{
    constructor(body1,body2){
        var constrainedOptions={
            bodyA:body1,
            bodyB:body2,
            length:30,
            stiffness:0.02
        }
    this.constrained=Constraint.create(constrainedOptions)
    World.add(world,this.constrained)

    }
    display(){
        push();
        strokeWeight(8);
        stroke("brown");
        var pos1=this.constrained.bodyA.position;
        var pos2=this.constrained.bodyB.position;
        line(pos1.x,pos1.y,pos2.x,pos2.y);
        pop();
    }

}