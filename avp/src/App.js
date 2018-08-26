import React, { Component } from 'react';
import './App.css';

import P5Wrapper from 'react-p5-wrapper';

import { Sound } from './sound/Sound.js'

import { player } from './player/player';

class App extends Component {
  render() {
    return (
      <div>
        <div className = "background">
          <div><P5Wrapper className = "player" sketch = { player } /></div>
          <div><Sound source = "http://streaming.tdiradio.com:8000/house.mp3"/></div>
        </div>
      </div>
    );
  }
}

export default App;
