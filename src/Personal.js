import React, { Component } from 'react';
import './App.css';
import cindy from './cindy.jpg'
class Personal extends Component {

    render() {
        return (
            <div className="personal">

                <h2 onClick={() => this.props.state(
                    <div>
                        <h1> Hello.</h1>
                        <div id="initpage">
                        <img id="cindy" src={cindy}></img>
                            <h1> I am Cindy Li. </h1>
                            <h2> An undergraduate college student studying at NYU Shanghai. </h2>
                            <h2> Majoring in Interactive Media Business. </h2>
                            <h2> Shanghai | New York City</h2>
                        </div>
                    </div>)}> Personal Statement</h2>

            </div>
        );
    }
}

export default Personal;
