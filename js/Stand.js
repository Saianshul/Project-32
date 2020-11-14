class Stand {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    display() {
        var standPos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(standPos.x, standPos.y);
        rotate(angle);
        fill(186, 66, 67);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}