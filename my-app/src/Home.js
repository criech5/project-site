import React, { Component } from 'react';
import {Button, Jumbotron, Col, Row, Container, Fade} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Navigation from "./Navigation";

export default class Home extends Component {
    render() {
        return(
            <div>
                <Navigation />
                <h1>Cole's Stuff</h1>
                <br />
                <Button href="/project-site/#/spotipsy/">SpotiPsy</Button>
                <br />
                <br />
                <h4>Discover some statistics about your most recent Spotify plays!</h4>
                <p>Frontend built in React; backend is a server built with Python/Flask. Includes web automation done with Selenium Python.</p>
                <Button href="/project-site/#/yourdle/">Yourdle</Button>
                <br />
                <br />
                <h4>A reversal of Wordle - you provide the word, and the app will attempt to solve it!</h4>
                <p>Built entirely using React/Javascript, HTML, and CSS.</p>
                <br />
                <br />
                <Button href="https://github.com/criech5/">My GitHub</Button>
                <br />
                <br />
                <h4>View my other projects here!</h4>
            </div>
        );
    }
}