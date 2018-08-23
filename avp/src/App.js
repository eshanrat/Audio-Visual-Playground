import React, { Component } from 'react';
import './App.css';

import { Canvas } from './canvas/Canvas'


class App extends Component {
  render() {
    return (
      <div className = "background">
        <Canvas width = {200} height = {200}/>
      </div>
    );
  }
}

export default App;
