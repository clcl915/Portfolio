import React, { Component } from 'react';
import './App.css';
class FutureWork extends Component {

  render() {
    return (
      <div className="fw">
        <h2 onClick = {() => this.props.state(
        <div> 
              <h1> Future Work</h1>
              <p>We definitely have a lot more work in terms of refining this application.</p>
              <p>First, it needs to be fully available to be published as a WeChat Mini Program. The state of our project is still in the developing stage and we need to publish it to the WeChat Mini Program platform.</p>
              <p>We also need to add more generic products to the application because what we have as of now, is brand names like Nike and Adidas. By adding more generic products for example like socks, the quality is definitely varied and allows for a more equal distribution.</p>
              <p>We also need to add a function to close the WeChat mini program and direct the user back to the normal WeChat messaging page.</p>
          </div>)}> Future Work</h2>
      </div>
    );
  }
}

export default FutureWork;
