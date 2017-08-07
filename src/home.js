import React, { Component } from 'react';
import './content.css';

class Home extends Component {

  historyTest = () => {
    console.log("button clicked!");
    this.props.history.push('/about');
  };

  render() {
    return (
      <div className="full-width">
        <div className="content centered-h">
          <h1>Home</h1>
          <p>
            Please press the button below.
          </p>
          <button onClick={this.historyTest}>go to About</button>
        </div>

      </div>
    );
  }
}

export default Home;
