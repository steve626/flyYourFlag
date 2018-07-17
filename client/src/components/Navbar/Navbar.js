import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class OurNavbar extends Component {
   render() {
       return(
           <div>
        <Navbar staticTop collapseOnSelect>
        <Navbar.Header>
            <Navbar.Brand>
                Fly Your Flag&nbsp;<i className="fa fa-flag"></i>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} to="/">
                Profile
            </NavItem>
            </Nav>
            <Nav pullRight>
            <NavItem eventKey={2} componentClass={Link} to="/Profile">
                Home
            </NavItem>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </div>

           
       )
   }
}