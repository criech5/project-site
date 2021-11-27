import React, { Component } from 'react';
import {Button, Jumbotron, Col, Row, Container, Fade} from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';

class SignedIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayData: false,
            accessTokens: [],
            playData: {}
        }
        this.fetchData = this.fetchData.bind(this);
        this.setState = this.setState.bind(this);
    }

    componentDidMount() {
        window.addEventListener('load', this.fetchData);
    }

    componentWillUnmount() {
        window.removeEventListener('load', this.fetchData)
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
                            <h1 className="display-3">Thanks for signing in.</h1>
                            <p className="lead">Time to see how you've been doing lately.</p>
                            <hr className="my-2"/>
                        </Jumbotron>
                        {!this.state.displayData && this.displayLoading()}
                        {this.state.displayData && this.displayResults()}
                    </div>

                </Col>

            </div>
        );
    }

    fetchData() {
        fetch('http://ec2-3-19-57-186.us-east-2.compute.amazonaws.com:5000/psy')
            .then((response) => {
                return response.json();
            }).then((text) => {
            console.log('GET response:');
            console.log(text);
            this.setState({playData: text});
            this.displayData(true);
        })
    }

    displayLoading() {
        return (
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
        );
    }

    displayResults() {
        const text = this.state.playData;
        return (
          <div>
              <Fade left>
              <h2>Age</h2>
              <h5>According to Spotify, your music taste is {text.age.ymd[0]} years, {text.age.ymd[1]} months, and {text.age.ymd[2]} days old!</h5>
              <p>{text.age.blurb}</p>
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Location</h2>
                  <h5>According to my calculations...</h5>
                  <p>{text.location.blurb}</p>
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Listen Range</h2>
                  <p>{text.range.blurb}</p>
              </Fade>
              <hr className="my-2"/>
              <Fade left>
                  <h2>Recommended Artists</h2>
                  <Carousel> {
                    text.recommended.map((item) => (
                      <Carousel.Item>
                          <a href={item.url}>
                          <img src={item.images[1].url} />
                          </a>
                          <Carousel.Caption>
                              <h4>{item.name}</h4>
                          </Carousel.Caption>
                      </Carousel.Item>
                      ))}
                  </Carousel>
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Your Top Songs</h2>
                  <p>{text.top_songs.blurb}</p>
                  <Carousel> {
                      text.top_songs.songs.map((item) => (
                          <Carousel.Item>
                              <a href={item.url}>
                                  <img src={item.images[1].url} />
                              </a>
                              <Carousel.Caption>
                                  <h4>{item.name}</h4>
                                  {item.artists.map((artist) => (
                                      <h5>Artist: {artist.name}</h5>))}
                                  <h5>Album: {item.album}</h5>
                              </Carousel.Caption>
                          </Carousel.Item>
                      ))}
                  </Carousel>
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Your Top Artists</h2>
                  <p>{text.top_artists.blurb}</p>
                  <Carousel> {
                      text.top_artists.artists.map((item) => (
                          <Carousel.Item>
                              <a href={item.url}>
                                  <img src={item.images[1].url} />
                              </a>
                              <Carousel.Caption>
                                  <h4>{item.name}</h4>
                              </Carousel.Caption>
                          </Carousel.Item>
                      ))}
                  </Carousel>
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Average Song Length</h2>
                  <h5>{text.length[0]}:{text.length[1]}</h5>
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Top Genres</h2> {
                  text.top_genres.map((genre) => (
                  <h5>{genre[0][0].toUpperCase() + genre[0].substring(1)}</h5>
                  ))}
              </Fade>
              <hr className="my-2"/>

              <Fade left>
                  <h2>Average Popularity</h2>
                  <h5>{text.popularity.score}</h5>
                  <p>{text.popularity.blurb}</p>
                  <Carousel>
                          <Carousel.Item>
                              <a href={text.popularity.most.url}>
                                  <img src={text.popularity.most.images[1].url} />
                              </a>
                              <Carousel.Caption>
                                  <h4>Most Popular: {text.popularity.most.name}</h4>
                                  {text.popularity.most.artists.map((artist) => (
                                      <h5>Artist: {artist.name}</h5>))}
                                  <h5>Album: {text.popularity.most.album}</h5>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item>
                              <a href={text.popularity.least.url}>
                                  <img src={text.popularity.least.images[1].url} />
                              </a>
                              <Carousel.Caption>
                                  <h4>Most Obscure: {text.popularity.least.name}</h4>
                                  {text.popularity.least.artists.map((artist) => (
                                      <h5>Artist: {artist.name}</h5>))}
                                  <h5>Album: {text.popularity.least.album}</h5>
                              </Carousel.Caption>
                          </Carousel.Item>
                  </Carousel>
              </Fade>
              <hr className="my-2"/>
          </div>
        );
    }
}

export default SignedIn;
