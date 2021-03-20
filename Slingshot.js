class Slingshot {
    constructor(bodyA, myPoint) {
        var options = {
            bodyA: bodyA,
            pointB: myPoint,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);

        this.myPos = myPoint;
    }

    fly() {
        this.chain.bodyA = null;
    }

    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            var pointB = this.myPos;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }

}