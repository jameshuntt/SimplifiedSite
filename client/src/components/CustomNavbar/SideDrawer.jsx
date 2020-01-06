import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './SideDrawer.scss'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer open'];
    }
    return(
        <nav className={drawerClasses}>
            <ul>
                <li>
                    <Link to="/">
                        <Button type="primary">
                            Home
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/About">
                    <Button type="primary">
                            About us
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/EventInformation">
                    <Button type="primary">
                            Information
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/Register">
                    <Button type="primary">
                            Register
                        </Button>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default sideDrawer;