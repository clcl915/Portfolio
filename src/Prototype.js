import React, { Component } from 'react';
import './App.css';
import cccc from './cccc.mp4'
class Prototype extends Component {

  render() {
    return (
      <div className="prototype">
        <h2 onClick = {() => this.props.state(
        <div> 
              <h1> Our Prototype</h1>
                <video id="prototypevid" src={cccc} controls></video>
          </div>)}> Prototype</h2>
      </div>
    );
  }
}

export default Prototype;
