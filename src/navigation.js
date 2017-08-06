import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './navigation.css'


class Navigation extends Component {
  render() {
    return (
      <div className='Navigation'>
        <Navbar inverse collapseOnSelect>
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
