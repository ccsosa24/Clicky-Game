import React from 'react';
import '../clicky-bootstrap/clickyBootstrap.js';

const clickyBootstap = () => {
    return(
        <div className="jumbotron">
            <h1 className="display-4">Friends</h1>
            <p className="lead">
                Click on the images to win points but click on the same image and you will lose..
            </p>

        </div>
    );
}

export default clickyBootstrap;