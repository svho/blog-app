import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
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
              <NavItem eventKey={1} >
                <NavLink exact className="nav-item hover-underline" activeClassName="nav-item-active" to="/">Home</NavLink>
              </NavItem>
              <NavItem eventKey={2} >
                <NavLink className="nav-item hover-underline" activeClassName="nav-item-active" to="/articles">Articles</NavLink>
              </NavItem>
              <NavItem eventKey={3} >
                <NavLink className="nav-item hover-underline" activeClassName="nav-item-active" to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </div>
    );
  }
}

export default Navigation;
