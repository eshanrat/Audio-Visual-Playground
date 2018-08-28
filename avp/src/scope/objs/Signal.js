export class Signal {
    constructor(signal, bounds) {

        this.bounds = bounds;

        this.signal = signal;

        this.state = 'invisible';

        this.position = 0;
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
            
            canvas.noStroke();
            canvas.fill(40, 40, 40, 255 * this.opacity);
            canvas.rect(this.bounds.left, this.bounds.bottom, this.bounds.right, this.bounds.bottom);

            canvas.noFill();
            canvas.stroke(100, 100, 100, 255 * this.opacity);

            canvas.beginShape();

            var mx = 0,
                sx = 0,
                my = 0,
                sy = 0;

            for (mx = 0; mx <= (this.bounds.right - this.bounds.left); mx++) {
                my = this.signal[mx];
                
                sx = mx + this.bounds.left;
                
                sy = canvas.map(my, 0, 1, this.bounds.bottom, this.bounds.top);
                canvas.vertex(sx, sy);
            }
    
            canvas.endShape();
        }
    }
}