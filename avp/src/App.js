import React, { Component } from 'react';

//css imports
import './App.css';
import './components/button/buttons.css'


//react components
import { Button } from './components/button/Button.js'
import { Sound } from './sound/Sound.js'


//p5 canvas
import P5Wrapper from 'react-p5-wrapper';

//sketches
import { player } from './player/player';


class App extends Component {
  render() {
    return (
      <div>
        <div className = "background">
          <div><P5Wrapper className = "player" sketch = { player } /></div>
          <div><Button styles = "radiobutton"/></div>
          <div><Sound source = "http://streaming.tdiradio.com:8000/house.mp3"/></div>
        </div>
      </div>
    );
  }
}

export default App;
