import React, { Component } from 'react';
import {Button, Jumbotron, Col, Row, Container, Fade, Form, FormGroup, Label, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

class SpotiPsyHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: false,
            accessTokens: [],
            email: ""
        }
    }

    displayData = (bool) => {
        this.setState({
            displayData: bool
        });
        fetch('https://spotipsy.herokuapp.com/automate/' + this.state.email)
    }

    logEmail(email) {

    }

    render() {
        return (
            <div>
                <Col>
                    <div>
                        <Jumbotron>
                            <h1 className="display-3">What music do you like to listen to?</h1>
                            <p className="lead">Actually, don't answer that. Based on your last 50 listens, I already know.</p>
                            <hr className="my-2"/>
                            {!this.state.displayData && this.displayEmail()}
                            {this.state.displayData && this.displayLogin()}
                        </Jumbotron>
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

    displayLogin() {
        return(
            <div>
                <Col>
                    <Fade left>
                        <Button onClick={event => window.location.href=`https://accounts.spotify.com/authorize?client_id=136c245c7f744cf1844b2bb64aadbcb1&response_type=code&redirect_uri=https://spotipsy.herokuapp.com/auth&scope=playlist-read-private%20playlist-modify-private%20playlist-modify-public%20user-read-recently-played%20user-top-read&show_dialog=true`}>
                            Login with Spotify to begin
                        </Button>
                    </Fade>
                </Col>
            </div>
        );
    }

    setEmail(email) {
        this.setState({email: email})
    }

    displayEmail() {
        return (
          <div>
              <p className="lead"><b>Please input your email to continue:</b></p>
              <Form>
                  <FormGroup row>
                      <Col sm={4}></Col>
                      <Col sm={3}>
                          <Input
                              id="exampleEmail"
                              name="email"
                              placeholder="example@example.com"
                              type="email"
                              onChange={e => this.setEmail(e.target.value)}
                              onSubmit={()=>this.displayData(true)}
                          />
                      </Col>
                      <Col sm={3}>
                          <Button onClick={()=>this.displayData(true)}>Submit</Button>
                      </Col>
                  </FormGroup>
              </Form>
          </div>
        );
    }
}

export default SpotiPsyHome;
