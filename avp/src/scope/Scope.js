import { Signal } from "./Signal";

export function scope (canvas) {

    var signal;

  canvas.setup = function () {
    canvas.createCanvas(3/5*canvas.windowWidth, 50);
    signal = new Signal(0,canvas.width, 50);
  };

  
  canvas.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  };

  canvas.mousePressed = function() {
    signal.state = 'trans_to_visible';
  }

  canvas.mouseReleased = function() {
    signal.state = 'trans_to_invisible';
  }

  canvas.draw = function () {
    
      canvas.background("#202020");

      signal.update();
      signal.draw(canvas);
  };

};