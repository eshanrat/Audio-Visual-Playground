import React, { Component } from 'react';

//css imports
import './App.css';
import './components/button/buttons.css'


//react components
import { Button } from './components/button/Button.js'


//p5 canvas
import P5Wrapper from 'react-p5-wrapper';

//sketches
import { player } from './player/player';
import { scope } from './scope/Scope'


class App extends Component {
  render() {
    return (
      <div className = "background">
        <P5Wrapper className = "player" sketch = { player } />
        <P5Wrapper className = "scope" sketch = { scope } />
      </div>
    );
  }
}

export default App;
