export class PositionIndicator {
    constructor(start, end, size) {

        this.start = start;
        this.end = end;

        this.size = size;
        this.opacity = 0;

        this.x = 0;
        this.position = 0;

        this.state = 'invisible';

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

        this.clicked = function(canvas) {
            if (canvas.mouseX >= this.start && canvas.mouseX <= this.end) {
                this.x = canvas.mouseX;
            } else if (canvas.mouseX < this.start){
                this.x = this.start;
            } else if (canvas.mouseX > this.end) {
                this.x = this.end;
            }
        }

        this.dragged =  function(canvas) {
            if (canvas.mouseX >= this.start && canvas.mouseX <= this.end) {
                this.x = canvas.mouseX;
            } else if (canvas.mouseX < this.start){
                this.x = this.start;
            } else if (canvas.mouseX > this.end) {
                this.x = this.end;
            }
        } 

        this.draw = function(canvas) {
            
            if (Math.abs(this.x -canvas.mouseX) < 2 && canvas.mouseY < 50) {
                canvas.stroke(255, 255, 255, (this.opacity - 0.5) * 255);
                canvas.line(this.x - 1, 0, this.x - 1, this.size);
            
                canvas.stroke(255, 255, 255, (this.opacity - 0.5) * 255);
                canvas.line(this.x + 1, 0, this.x + 1, this.size);    
            }

            canvas.stroke(255, 255, 255, this.opacity * 255);
            canvas.line(this.x, 0, this.x, this.size);
        }
    }
}