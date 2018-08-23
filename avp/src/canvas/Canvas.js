import React from 'react';

import './Canvas.css'

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
        for (var i = 0; i <= canvas.width; i++) {
            var mx = i;
            var my = (canvas.width / 2 * Math.sin(6.28/50 * (mx + this.state.count))) * Math.abs(mx - canvas.width /2) / canvas.width;
            
            var cx = i;
            var cy = my + canvas.width / 4;
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