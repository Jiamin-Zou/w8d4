export default class Bird {
    constructor(dimension) {
        this.velocity = 0;
        this.dimension = dimension;
        this.x = 140;
        this.y = 300;
    }

    drawBird(ctx) {
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, 40, 30);
    }

    animate(ctx){
        this.drawBird(ctx)
    }



};