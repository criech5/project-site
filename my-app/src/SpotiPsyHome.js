import React, { Component } from 'react';
import {Button, Jumbotron, Col, Row, Container, Fade} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

class SpotiPsyHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: false,
            accessTokens: []
        }
    }

    displayData = (bool) => {
        this.setState({
            displayData: bool
        });
    }

    render() {
        return (
            <div>

                <Col>
                    <div>
                        <Jumbotron>
                            <h1 className="display-3">What music do you like?</h1>
                            <p className="lead">Actually, don't answer that. Based on your last 50 listens, I already know.</p>
                            <hr className="my-2"/>
                            <Button onClick={event => window.location.href=`https://accounts.spotify.com/authorize?client_id=136c245c7f744cf1844b2bb64aadbcb1&response_type=code&redirect_uri=https://spotipsy.herokuapp.com/auth&scope=playlist-read-private%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played%20user-top-read&show_dialog=true`}>
                                Login with Spotify to begin
                            </Button>
                        </Jumbotron>
                        {this.state.displayData && this.displayResults()}
                    </div>

                </Col>

            </div>
        );
    }

    spotifyLogin() {
        fetch(`https://accounts.spotify.com/authorize?
      client_id=136c245c7f744cf1844b2bb64aadbcb1&
      response_type=code&
      redirect_uri=https://spotipsy.herokuapp.com/&
      scope=playlist-read-private%20playlist-modify-private%20playlist-modify-public
      %20user-read-recently-played%20user-top-read&
      show_dialog=true`).then(response => {
            return response.json();
        }).then(users => {
            console.log(users);
        })
    }

    displayResults() {
        return(
            <div>
                <Col>
                    <Fade left>
                        <h2>You really like to listen to rock music.</h2>
                        <h4>Cool. I don't have anything else to say about that.</h4>
                    </Fade>
                </Col>
            </div>
        );

    }
}

export default SpotiPsyHome;
