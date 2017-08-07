import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './navigation.css'


class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect className='Navigation'>
          <Navbar.Header>
            <Navbar.Brand>
              <a>Blog App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} className='hover-underline'>Home</NavItem>
              <NavItem eventKey={2} className='hover-underline'>Articles</NavItem>
              <NavItem eventKey={3} className='hover-underline'>About</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
