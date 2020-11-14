class Block {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            'restitution': 0.4,
            'friction': 0.0
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.visibility = 255;
        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);
    }

    score() {
        if(this.visiblity < 0 && this.visiblity >- 105) {
            score++;
        }
    }

    display() {
        if(this.body.speed < 3) {
            var blockPos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(blockPos.x, blockPos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        }
        else {
            World.remove(world, this.body);
            push();
            this.visibility = this.visibility - 5;
            pop();
        }
    }
}