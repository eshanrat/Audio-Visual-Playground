export class Signal {
    constructor(signal, dom, ran) {

        this.setran = ran;

        this.dom = dom
        this.ran = 0;

        this.signal = signal;

        this.state = 'invisible';

        this.update = function() {
            if (this.state === 'trans_to_visible') {
                if (this.ran < this.setran) {
                    this.ran = this.ran + 4;
                } else {
                    this.ran = this.setran;
                    this.state = 'visible';
                }
            } else if (this.state === 'trans_to_invisible') {
                if (this.ran > 0) {
                    this.ran = this.ran - 4;
                } else {
                    this.ran = 0;
                    this.state = 'invisible';
                }
            }
        }

        this.draw = function(canvas) {
            canvas.noStroke();
            canvas.fill(20, 20, 20, 0);
            canvas.rect(1/5 * canvas.width, 0, 4/5 * canvas.width, 50);

            canvas.noFill();
            canvas.stroke(255);

            canvas.beginShape();

            var dx = 0,
                cx = 0,
                dy = 0,
                cy = 0;

            for (dx = 0; dx <= this.dom; dx++) {
                cy = canvas.random(dx);
    
                dy = canvas.map(cy, 0, 1, 0, this.ran);
                canvas.vertex(dx, dy);
            }
    
            canvas.endShape();
        }
    }
}