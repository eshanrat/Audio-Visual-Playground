import React from 'react';

import './sound.css'

export class Sound extends React.Component {
  constructor(props) {
    super(props);

      this.state = { play: false };
      this.src = 'http://streaming.tdiradio.com:8000/house.mp3';
      this.audio = new Audio(this.src);
      this.play = this.play.bind(this);
    }

    play() {
      this.setState({ play: this.state.play });
      console.log(this.audio);

      this.setState(
          {
              play: this.audio.play()
          }
      )
    }

    render() {
      return (
        <div>
          <button className = "button" onClick={ this.play }><span>♫</span></button>
        </div>
      );
   }
}
