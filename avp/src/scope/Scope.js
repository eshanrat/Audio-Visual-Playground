import { Signal } from "./objs/Signal.js";
import { PositionIndicator } from "./objs/PositionIndicator.js"
import { Time } from "./objs/Time.js";

export function scope (canvas) {

  var signal;
  var positionIndicator;

  var timeIndicator;

  var data = [];

  var position = 0.3;
  var state = 'line';

  var songLength = 212;

  canvas.setup = function () {
    canvas.createCanvas(canvas.windowWidth, 50);

    for (var i = 0; i < canvas.width; i++) {
      data.push(canvas.random());
    }


    signal = new Signal(
      data, 
    
      //bounds
      {
        left: 1/5 * canvas.width,
        right: 4/5 * canvas.width,
        top: 0,
        bottom: canvas.height
      }
    );

    positionIndicator = new PositionIndicator(1/5 * canvas.width, 4/5 * canvas.width, 50);

    timeIndicator = new Time({x: 4/5 * canvas.width + 10, y: canvas.height / 2 + 6});

    signal.position = position;
    positionIndicator.x = 0;

    timeIndicator.seconds = 0;
    timeIndicator.length = songLength;
  };

  
  canvas.myCustomRedrawAccordingToNewPropsHandler = function (props) {
  };

  canvas.mousePressed = function() {
    positionIndicator.clicked(canvas);
    timeIndicator.seconds = Math.floor(canvas.map(positionIndicator.x, positionIndicator.start, positionIndicator.end, 0, songLength));
  }

  canvas.mouseDragged = function() {
    positionIndicator.dragged(canvas);
    
    timeIndicator.seconds = Math.floor(canvas.map(positionIndicator.x, positionIndicator.start, positionIndicator.end, 0, songLength));
  }

  canvas.mouseClicked = function() {
    if (state === 'wave') {
      signal.state = 'trans_to_visible';
      positionIndicator.state = 'trans_to_visible';
      timeIndicator.state = 'trans_to_visible';

      state = 'line';
    } else if (state === 'line') {
      signal.state = 'trans_to_invisible';
      positionIndicator.state = 'trans_to_invisible';
      timeIndicator.state = 'trans_to_invisible';

      state = 'wave';
    }
  }

  canvas.draw = function () {
    
      canvas.clear();

      signal.update();
      signal.draw(canvas);

      positionIndicator.update();
      positionIndicator.draw(canvas);

      timeIndicator.update();
      timeIndicator.draw(canvas);
  };

};