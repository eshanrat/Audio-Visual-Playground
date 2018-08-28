export class Wave {
    constructor(dom, ran) {

        this.dom = dom;
        this.ran = ran;

        this.ampl = 1;
        this.freq = 10;
        this.phase = 0;
        this.state = 'wave';

        this.update = function() {
            this.phase++;

            if (this.state === 'trans_to_line') {
                if (this.ampl > 0) {
                    this.ampl = this.ampl - 0.1;
                } else {
                    this.state = 'line';
                    this.ampl = 0;
                }
            } else if (this.state === 'trans_to_wave') {
                if (this.ampl < 1) {
                    this.ampl = this.ampl + 0.1;
                } else {
                    this.state = 'wave';
                    this.ampl = 1;
                }
            }
        }

        this.draw = function(canvas) {
            canvas.noFill();
            canvas.beginShape();

            var dx = 0,
                cx = 0,
                dy = 0,
                cy = 0;

            for (dx = 0; dx <= this.dom; dx++) {
                cx = canvas.map(dx, 0, this.dom, -1, 1);
                cy = signal(this.ampl, this.freq * this.ampl, this.phase, cx);
    
                dy = canvas.map(cy, -1, 1, 0, this.ran);
                canvas.vertex(dx, dy);
            }
    
            canvas.endShape();
        }
    }
}

function sinusoid(ampl, freq, phase, offset, time) {
    return ampl * Math.sin(2 * Math.PI * freq * (time - phase)) + offset;
  }

  function expwindow(time) {
    return Math.pow(Math.E, -Math.abs(Math.pow(3*Math.E * time,2)));
  }

  function signal(ampl, freq, phase, time) {
    return sinusoid(ampl, freq, phase / 800, 0, time) * expwindow(time);
  }