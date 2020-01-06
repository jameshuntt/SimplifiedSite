import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import MenuIcon from '@material-ui/icons/Menu'
import SideDrawer from './SideDrawer'
import Backdrop from './Backdrop'
import './CustomNavbar.scss'

export default class CustomNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sideDrawerOpen: false
        }
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
        let backdrop;
        if (this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />
        }
        return (
            <div className="navbar-container">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        zIndex: 'inherit'
                    }}
                >
                <div className="menu-icon"><MenuIcon onClick={this.drawerToggleClickHandler} style={{ fontSize: '36px' }} /></div>
                    <SideDrawer show={this.state.sideDrawerOpen} />
                    {backdrop}
                    <div className="navbar-button">
                        <Link to="/" className="link"><h4>Home</h4></Link>
                    </div>
                    <div className="navbar-button">
                        <Link to="/Services" className="link"><h4>Services</h4></Link>
                    </div>
                    <div className="navbar-button">
                        <Link to="/About" className="link"><h4>About</h4></Link>
                    </div>
                    <div className="navbar-button">
                        <Link to="/ContactUs" className="link"><h4>Contact Us</h4></Link>
                    </div>
                    <img className="navbar-expanded-logo" alt="logo" src="/assets/WebAmbrosia.png" />
                    <Button className="medium-size-button">Request Quote</Button>
                    <Button className="small-size-button">Quote</Button>
                </div>
                    <hr style={{ color: 'gray', height: '1px', width: '100vw', zIndex: 'inherit' }} />
            </div>
        )
    }
}
