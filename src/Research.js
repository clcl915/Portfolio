import React, { Component } from 'react';
import './App.css';
import paper from "./paperprototype.jpg";
import vid from "./paperprototype.MOV";
class Research extends Component {

    render() {
        return (
            <div className="research">
                <h2 onClick={() => this.props.state(
                    <div id="researchdiv">
                        <h1> Our Research</h1>
                        <div id="imgntxt">
                            <div id="blocktxt">
                            <img id="pp" src={paper}></img>
                            
                                <aside>In our research,when I was researching a little bit on how FreshDirect brings fresh groceries to consumers and I stumbled upon the website of RangeMe.
                                    RangeMe advertises to be the leading platform that steamlines product discovery, sampling, and sourcing between retailers and suppliers.
                                    By having suppliers showcase their products or having the ability to directing message retailers, suppliers can increase brand visibility and expand their company.
                    RangeMe works with companies like Target, Sephora, WholeFoods, CVS… </aside>
                                <aside>We noticed that RangeMe’s business model is quite similar to ours in a sense where they are connecting local suppliers with big retailers. Researching they do have an app, but they are primarily focused on their online website. Our app can innovate their type of business model in the field of China as well because there are tons of local businesses that big retailers can discover.</aside>
                            </div>
                            <video id="vid" src={vid} controls></video>
                        </div>

                    </div>)}> Research</h2>

            </div>
        );
    }
}

export default Research;
