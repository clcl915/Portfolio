import React, { Component } from 'react';
import './App.css';
class Project extends Component {

    render() {
        return (
            <div className="project">
                <h2 onClick={() => this.props.state(
                    <div>
                        <h1> Our Project Summary</h1>
                        <p>For our project, we created a platform for both retailer and producer use.
                              Especially in China, a lot of people use Wechat as a platform to communicate in terms of sales and production.
                              There is also the case where retailers search for products from certain suppliers from WeChat moments. There has got to a better platform for this connection.
                    That's why we introduced this platform that we created: <b>CCCC</b> </p>
                        <h2>CCCC</h2>
                        <p>Our product is a retailer and producer communication platform in the form of a WeChat Mini Program. Knowing almost everyone in China knows and possibly uses WeChat,
                            WeChat is the most reasonable and effective platform in the range of China.
                        </p>
                        <p>Our app tries to tackle this problem by giving producers and sellers a platform on which they have can open communication and exchange feedback for various products.
                        </p>
                        <p>Our app combines the openness of a public forum with the convenience of WeChat mini program.  Since our target audience (both producers and retailers) are from China, WeChat is the best middleman for our program, since currently there are nearly 900 million WeChat users in China.
                        </p>
                        <p>We want our application to be not limited to just one category as well. So as you will see, there are a variety of categories that different types of people can pick from. For retailers, we want this application to entail a place where they can efficiently search for producers that are close by or producers that have good feedback from other retailers. For producers, we want this application to entail a place where they can have a platform for brand recognition. This application can not only allow them to host their products but also have a platform for them to receive feedback.
</p>


                    </div>)}> Project Summary</h2>
            </div>
        );
    }
}

export default Project;
