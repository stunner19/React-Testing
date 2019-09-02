import React, {Component} from 'react';
import { Navbar, Nav, NavItem, Collapse, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends Component {

    renderButton() {
        if(this.props.isLoggedIn) return <Button>Sign Out</Button>
        else return <Button>Sign In</Button>
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