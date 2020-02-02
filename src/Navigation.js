import React from 'react';
import './App.css';
import { Nav, Navbar, NavItem } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="/">Speed Stock</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavItem>
            <Nav.Link href="/">Home</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/About">About</Nav.Link>
          </NavItem>
          <NavItem>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
