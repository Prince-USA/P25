class Paper{

    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        };
        this.radius = 30;
        this.body = Bodies.circle(x, y, this.radius / 2, options);
        

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        stroke("red")
        strokeWeight(4)
        ellipse(0, 0, this.radius,this.radius);
        pop();

    }
};