import React from 'react';

import './Canvas.css'
import { Rectangle } from './drawables/Rectangle'

export class Canvas extends React.Component {
    
        constructor(props){
            super(props);
            this.state = {count: 0};
        }

      componentDidMount() {
        this.interval = setInterval(
          () => this.tick(),
          30
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.setInterval);
      }
    
      tick() {

        this.state.count++;

        let canvas = this.refs.canvas;
        let ctx = canvas.getContext('2d');

        ctx.strokeStyle="#cccccc";
        ctx.lineWidth=1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        for (var i = - (canvas.width / 2); i <= (canvas.width / 2); i++) {
            var mx = i;

            var wave = canvas.height / 4 * Math.sin(Math.PI / (1 / 8 * canvas.width) * (mx - this.state.count));
            var filter = Math.pow(Math.E, -Math.abs(i / (canvas.width/2)));

            var cir = Math.sqrt(1 - Math.pow(i / (canvas.width / 2), 2));

            var my =  wave * filter * cir;

            var cx = mx + canvas.width / 2;
            var cy = my + canvas.height / 2;
            ctx.lineTo(cx, cy);
            ctx.moveTo(cx, cy);
        }
        ctx.stroke();
      }
    
      render() {
        return (
          <div>
            <canvas ref = "canvas" className = "canvas" width = {this.props.width} length = {this.props.height}>></canvas>
          </div>
        );
      }
}