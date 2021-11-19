import React, { Component } from 'react';
import { Button, Jumbotron, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

    render() {
        return(
            <div>
                <Jumbotron>
                    <h1 className="display-3">What music do you like?</h1>
                    <p className="lead">Create playlists that put your favorites front and center.</p>
                    <hr className="my-2" />
                    <Button color="primary">Get started</Button>
                </Jumbotron>
            </div>
        );
    }
}

export default App;