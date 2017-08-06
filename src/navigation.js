import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

class Navigation extends Component {
  render() {
    return (
      <div className='Navigation'>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Blog-App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1}>Home</NavItem>
              <NavItem eventKey={2}>Articles</NavItem>
              <NavItem eventKey={2}>About</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
