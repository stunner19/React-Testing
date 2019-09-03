import React, {Component} from 'react';
import { Navbar, Nav, NavItem, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderButton() {
        if(this.props.isLoggedIn) return ( <Button onClick = {() => this.props.changeAuth(false)}>Sign Out</Button> );
        else return ( <Button onClick = {() => this.props.changeAuth(true)}>Sign In</Button> );
    }

    render(){
        return(
            <div>
                <Navbar color = "light" light expand = "md">
                    <div className = "container">
                        <Collapse  navbar>
                            <Nav className = "mr-auto" navbar>
                                <NavItem>
                                    <Link className = "nav-link" to = "/">Home</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className = "nav-link" to = "/post">Post a Comment</Link>
                                </NavItem>
                                <Nav className="mr-auto" navbar>
                                    <NavItem>{this.renderButton()}</NavItem>
                                </Nav>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>            
            </div>
        );
    }
}

export default Header;