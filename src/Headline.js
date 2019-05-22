import React, { Component } from 'react';
import './App.css';
import Personal from './Personal.js';
import Project from './Project.js';
import Research from './Research.js';
import Prototype from './Prototype.js';
import Main from './Main.js';
import FutureWork from './FutureWork.js';
class Headline extends Component {
    constructor(props) {
        super(props);
        this.state = {
          state: '',
        }
      }
    updateMain = (value) => {
        this.setState({state:value});
    }
    render() {
        return (
            <div className="headline">
                <div className="heading">
                    <div className="name">
                        <h1>CINDY LI</h1>
                    </div>
                    <div className="components">
                        <div className="single">
                            <Personal state={this.updateMain}></Personal>
                        </div>
                        <div className="single">
                            <Project  state={this.updateMain}></Project>
                        </div>
                        <div className="single">
                            <Research  state={this.updateMain}></Research>
                        </div>
                        <div className="single">
                            <Prototype state={this.updateMain}></Prototype>
                        </div>
                        <div className="single">
                            <FutureWork state={this.updateMain}></FutureWork>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className="main">
                    <Main display={this.state.state}></Main>
                </div>
            </div>
        );
    }
}

export default Headline;
