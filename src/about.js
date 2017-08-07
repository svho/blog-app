import React, { Component } from 'react';
import './content.css';

class About extends Component {
  render() {
    return (
      <div className="full-width">
        <div className="content centered-h">
          <h1>About</h1>
          <p>
            This website was created by Sven Hornung and uses <code>react.js</code>.
          </p>
      </div>
    </div>
    );
  }
}

export default About;
