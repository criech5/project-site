import React, {Component} from 'react';
import {Col, Fade} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: false,
            accessTokens: [],
            playsData: props.state.playData
    }
    }

    render() {
        return (
            <div>
                <Col md={4}>
                </Col>
                <Col md={4}>
                    <div>
                            <h1 className="display-3">Let's take a look at your preferences...</h1>
                            <hr className="my-2"/>
                    </div>
                    <div>
                        <Fade left>
                            <h2>Your Music Age</h2>
                            <h4>{this.state.playData.age.ymd}</h4>
                        </Fade>
                    </div>

                </Col>

            </div>
        );
    }

    fetchData() {
        fetch('http://127.0.0.1:5000/psy')
            .then(function (response) {
                return response.json();
            }).then(function (text) {
                console.log('GET response:');
                console.log(text);
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

export default Results;
