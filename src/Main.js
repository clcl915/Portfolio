import React, { Component } from 'react';
import './App.css';
class Prototype extends Component {

  render() {
    return (
      <div className="main">
        {this.props.display}
      </div>
    );
  }
}

export default Prototype;
