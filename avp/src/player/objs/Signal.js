export class Signal {
    constructor(data, dmin, dmax, lbdom, rbdom, lbran, ubran) {

        this.data = data;

        this.dmin = dmin;
        this.dmax = dmax;

        this.lbdom = lbdom;
        this.rbdom = rbdom;
        
        this.lbran = lbran;
        this.ubran = ubran;

        this.widthPer = 0;

        this.update = function() {
            if (this.state == 'trans_to_visible') {
                if (this.widthPer < 1) {
                    this.widthPer = this.widthPer + 0.1;
                } else {
                    this.widthPer = 1;
                    this.state == 'visible';
                }
            } else if (this.state == 'trans_to_invisible') {
                if (this.widthPer > 0) {
                    this.widthPer = this.widthPer - 0.1;
                } else {
                    this.widthPer = 0;
                    this.state = 'invisible';
                }
            }
        }

        this.draw = function(canvas) {
            canvas.noFill();
            canvas.stroke(255, 255, 255, this.widthPer * 255);
            //canvas.stroke(255);
            canvas.beginShape();

            var dx = 0,
                cx = 0,
                dy = 0,
                cy = 0;

            for (dx = this.lbdom; dx <= this.rbdom; dx++) {
                cx = canvas.map(dx, this.lbdom, this.rbdom, 0, this.rbdom - this.lbdom);
                cy = data[cx];
    
                dy = canvas.map(cy, 0, 1, this.lbran * this.widthPer, this.ubran * this.widthPer);

                canvas.vertex(dx, dy);
            }
            
            canvas.endShape();
        }
    }
}