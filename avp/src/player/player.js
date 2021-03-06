import { Wave } from './objs/Wave'
import { Line } from './objs/Line'

export function player (canvas) {

  var wave;
  var vertDiv1, vertDiv2;

  var state = 'wave';

  canvas.setup = function () {
    canvas.createCanvas(canvas.windowWidth, 100);

    wave = new Wave(this.width, this.height);
    
    vertDiv1 = new Line(canvas.width / 5, 0, canvas.height/2);
    vertDiv2 = new Line(4 * canvas.width / 5, 0, canvas.height/2);
  };

  
  canvas.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  };

  canvas.mouseClicked = function() {
    if (state === 'wave') {
      wave.state = 'trans_to_wave';
      vertDiv1.state = 'trans_to_invisible';
      vertDiv2.state = 'trans_to_invisible';

      state = 'live';

    } else if (state === 'live') {
      wave.state = 'trans_to_line';
      vertDiv1.state = 'trans_to_visible';
      vertDiv2.state = 'trans_to_visible';

      state = 'wave';
    }
  }

  canvas.draw = function () {
    
      canvas.clear();
      canvas.stroke(255);

      wave.update();
      wave.draw(canvas);

      vertDiv1.update();
      vertDiv1.draw(canvas);

      vertDiv2.update();
      vertDiv2.draw(canvas);
  };

};