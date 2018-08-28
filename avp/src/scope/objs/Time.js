export class Time {
    constructor(pos) {

        this.pos = pos;

        this.seconds = 0;
        this.length = 0;

        this.state = 'invisible';

        this.opacity = 0;

        this.update = function() {
            if (this.state === 'trans_to_visible') {
                if (this.opacity < 1) {
                    this.opacity = this.opacity + 0.1;
                } else {
                    this.opacity = 1;
                    this.state = 'visible';
                }
            } else if (this.state === 'trans_to_invisible') {
                if (this.opacity > 0) {
                    this.opacity = this.opacity - 0.1;
                } else {
                    this.opacity = 0;
                    this.state = 'invisible';
                }
            }
        }

        this.draw = function(canvas) {
            
            canvas.noFill();
            canvas.textSize(20);
            canvas.stroke(100, 100, 100, 255 * this.opacity);

            canvas.text(Math.floor(this.seconds / 60)  + ":" + (this.seconds % 60).toLocaleString(undefined, {minimumIntegerDigits: 2}) + " / " + Math.floor(this.length / 60)  + ":" + (this.length % 60).toLocaleString(undefined, {minimumIntegerDigits: 2}) , this.pos.x, this.pos.y);
        }
    }
}