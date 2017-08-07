import React, { Component } from 'react';
import logo from './img/logo.png';
import './App.css';
import {Link} from 'react-router-dom';

import Navigation from './navigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="centered-v">
            <Link to="/"><img src={logo} className="App-logo" alt="logo"/></Link>
            <h2>Welcome to my Blog App with react.js</h2>
          </div>
        </div>
        <Navigation/>
      </div>
    );
  }
}

export default App;
