export class Line {
    constructor(x, y, setHeight) {

        this.x = x;
        this.y = y;

        this.setHeight = setHeight;

        this.height = 0;

        this.state = 'invisible';

        this.update = function() {
        
            if (this.state === 'trans_to_visible') {
                if (this.height < setHeight) {
                    this.height = this.height + 4;
                } else {
                    this.height = this.setHeight;
                    this.state = 'visible';
                }
            } else if (this.state === 'trans_to_invisible') {
                if (this.height > 0) {
                    this.height = this.height - 4;
                } else {
                    this.height = 0;
                    this.state = 'invisible';
                }
            }
        }

        this.draw = function(canvas) {
            canvas.noFill();
            canvas.line(this.x, this.y, this.x, this.y + this.height);
         }
    }
}