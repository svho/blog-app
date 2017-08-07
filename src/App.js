import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';

import Navigation from './navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="centered">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to my Blog-App with React</h2>
          </div>
        </div>
        <Navigation/>
      </div>
    );
  }
}

export default App;
