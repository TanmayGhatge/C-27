class Chain{
    constructor (bodyA, bodyB) {
        var options = {
            bodyA : bird.body,
            bodyB : constraintlog.body,
            stiffness : 0.1,
            length : 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    display(){
    var cl = this.chain.bodyA.position;
    var b = this.chain.bodyB.position;
    strokeWeight(3);
    line(cl.x, cl.y, b.x, b.y);  
    
    }
}