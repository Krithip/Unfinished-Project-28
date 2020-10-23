class Launcher {
 
constructor(body, anchor) {
    var options ={
        bodyA: body,
        pointB: anchor,
        stiffness: 0.04,
        length: 1
    }

this.bodyA = body
this.pointB = anchor    
this.launcher = Constraint.create(options)
World.add(world, this.launcher)
}

Attach(body) {this.launcher.bodyA = body}
Fly() {this.launcher.bodyA = null}

display() {
    if(this.launcher.bodyA) {
    var pointA = this.bodyA.position
    var pointB = pointB
    strokeWeight(2)
    line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
}