import { Wave } from './objs/Wave'

export function player (canvas) {

  var wave;

  canvas.setup = function () {
    canvas.createCanvas(canvas.windowWidth, 100);
    wave = new Wave(this.width, this.height);
  };

  canvas.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  };

  canvas.draw = function () {

      if (canvas.mouseY < 50 && canvas.pmouseY >= 50) {
        wave.state = 'trans_to_line';
      } else if (canvas.mouseY > 50 && canvas.pmouseY <= 50) {
        wave.state = 'trans_to_wave';
      }
    
      canvas.background("#161616");
      canvas.stroke(255);

      wave.update();
      wave.draw(canvas);
      
  };

};