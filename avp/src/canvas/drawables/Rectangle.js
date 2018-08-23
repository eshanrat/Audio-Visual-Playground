class Rectangle {
    constructor(x, y, width, height, color) {

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.color = color;
    }

    draw(ctx) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth=1;

        ctx.beginPath();

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.width);
        
        ctx.moveTo(this.x + this.width, this.y);
        ctx.lineTo(this.x + this.width, this.y + this.height);

        ctx.moveTo(this.x + this.width, this.y + this.height);
        ctx.lineTo(this.x, this.y + this.height);

        ctx.moveTo(this.x, this.y + this.height);
        ctx.lineTo(this.x, this.y);
        
        ctx.stroke();
    }
}