import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import './Home.scss'

export default class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-header">
                    <p>Forget Everything You Know About Web Development</p>
                </div>
                <div className="bottom-home-screen">
                    <div className="image1">
                        <img alt="computer-guy" className="computer-guy" src="/assets/computerguy.jpg" />
                    </div>
                    <div className="home-button">
                        <Button>
                            Request Quote
                        </Button>
                    </div>
                    <div className="image2">
                        {/*<img alt="servers" className="servers" src="/assets/computer.png" />*/}
                    </div>
                </div>
            </div>
        )
    }
}
